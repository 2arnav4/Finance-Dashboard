import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

console.log("✅ authRoutes.js loaded");

// Rename register → signup for consistency
router.get("/test", (req, res) => {
  res.send("Auth route working!");
});

router.post("/signup", async (req, res) => {
  console.log("📥 Signup body:", req.body); // 👈 Add this line

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("❌ Signup Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Incorrect password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ msg: "Service Error", error: err.message });
  }
});

export default router;
