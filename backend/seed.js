const mongoose = require("mongoose");
require("dotenv").config();

const Pizza = require("./models/pizza");

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {

  await Pizza.deleteMany();

  await Pizza.insertMany([
    {
      name: "Chicken Tikka Pizza",
      description: "Cheesy pizza topped with spicy chicken tikka",
      price: 899,
      image: "🍕",
      category: "Pizza"
    },
    {
      name: "MIAA Special Burger",
      description: "Juicy burger with cheese",
      price: 599,
      image: "🍔",
      category: "Burger"
    },
    {
      name: "Loaded Cheese Fries",
      description: "Cheesy fries",
      price: 399,
      image: "🍟",
      category: "Fries"
    }
  ]);

  console.log("Products Added");
  process.exit();

})
.catch(err => console.log(err));