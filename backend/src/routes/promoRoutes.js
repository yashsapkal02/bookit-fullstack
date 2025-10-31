import express from "express";
const router = express.Router();

router.post("/validate", (req, res) => {
  const { code, total } = req.body;
  let discount = 0;

  if (code === "SAVE10") discount = total * 0.1;
  else if (code === "FLAT500") discount = 500;
  else return res.status(400).json({ valid: false, message: "Invalid code" });

  res.json({ valid: true, discount });
});

export default router;
