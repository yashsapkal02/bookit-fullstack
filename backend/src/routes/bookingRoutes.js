import express from "express";
import { Booking } from "../models/Booking.js";
import { Hotel } from "../models/Hotel.js";
const router = express.Router();

// Create booking
router.post("/", async (req, res) => {
  try {
    const { userName, userEmail, checkIn, checkOut, hotelId } = req.body;

    const hotel = await Hotel.findByPk(hotelId);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });

    const booking = await Booking.create({
      userName,
      userEmail,
      checkIn,
      checkOut,
      totalAmount: hotel.price,
      hotelId,
    });

    res.status(201).json({ message: "Booking successful", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
