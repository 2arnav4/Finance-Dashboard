const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/Transaction"); // Assuming you have a Transaction model defined
const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(express.json());

app.post("/api/transaction", async (req, res) => {
    try {
        const { date, amount, type } = req.body;

        if(!date || !amount || !type) {
            return res.status(404).json({message: "Please provide all required fields: date, amount, type"});
        }
        const newTransaction = new Transaction({
            date,
            amount,
            type
        });
        await newTransaction.save();

        res.status(201).json({message: "Transaction created successfully", transaction: newTransaction});
    } catch(err) {
        console.error("Error creating transaction:", err);
        res.status(500).json({message: "Internal server error"});
    }
});




// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ DB connected successfully"))
  .catch((err) => console.error("❌ DB connection failed", err));

// Routes (optional placeholder for now)
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
