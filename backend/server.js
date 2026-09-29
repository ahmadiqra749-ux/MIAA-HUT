require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "MIAA HUT API is working!"
    });
});

app.use("/api/orders", orderRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(5000, () => {
            console.log("Server running at http://localhost:5000");
        });
    })
    .catch((error) => {
        console.error("MongoDB Error:", error.message);
    });