const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
});

router.post("/", async (req, res) => {
    try {
        const order = new Order({
            orderNumber: "MIAA-" + Date.now(),
            items: req.body.items,
            total: req.body.total
        });

        await order.save();

        res.status(201).json({
            success: true,
            message: "Order saved successfully",
            order
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;