import cors from "cors";
import express from "express";
import { connectDB, sequelize } from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => res.send("BookIt Backend Running ✅"));

const PORT = process.env.PORT || 4000;

connectDB();

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
