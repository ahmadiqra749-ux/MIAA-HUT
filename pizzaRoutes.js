const express = require("express");
const router = express.Router();

const Pizza = require("../models/pizza");

// Get all pizzas
router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Add a pizza
router.post("/", async (req, res) => {
  try {
    const pizza = new Pizza(req.body);
    const savedPizza = await pizza.save();

    res.status(201).json(savedPizza);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;