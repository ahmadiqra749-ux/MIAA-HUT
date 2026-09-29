const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.get("/", async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const order = new Order({
            orderNumber: "MIAA-" + Date.now(),
            items: req.body.items || [],
            total: Number(req.body.total || 0),
            customerName: req.body.customerName || "Guest",
            customerPhone: req.body.customerPhone || "",
            customerAddress: req.body.customerAddress || ""
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