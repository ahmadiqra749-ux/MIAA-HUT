const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// CREATE ORDER
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);

    const savedOrder = await order.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: savedOrder
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message
    });
  }
});

// GET ALL ORDERS
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      orders: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get orders",
      error: error.message
    });
  }
});

module.exports = router;