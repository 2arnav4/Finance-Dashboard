import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "yourSuperSecretKey";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("🔍 Received Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ msg: "Authorization header is missing or invalid" });
  }

  const token = authHeader.split(" ")[1];
  console.log("🧪 Extracted Token:", token);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("✅ Token Decoded Successfully:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ Token Verification Failed:", err.message);
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

export default authMiddleware;
