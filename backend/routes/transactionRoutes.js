// routes/transactionRoutes.js
import express from "express";
import Transaction from "../models/Transaction.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Protect this route
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { date, amount, type } = req.body;

    if (!date || !amount || !type) {
      return res.status(400).json({
        msg: "Please provide all required fields: date, amount, type",
      });
    }

    // 🧠 Attach userId from decoded JWT
    const newTransaction = new Transaction({
      date,
      amount,
      type,
      userId: req.user.id,
    });

    await newTransaction.save();

    res.status(201).json({
      msg: "Transaction created successfully",
      transaction: newTransaction,
    });
  } catch (err) {
    console.error("Error creating transaction:", err);
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
