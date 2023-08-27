// routes/api.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// Endpoint to create a booking
router.post('/create-booking', async (req, res) => {
  try {
    const { name, mobileNumber, address, cartItems } = req.body;

    if (!name || !mobileNumber || !address || !cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: 'Incomplete booking data' });
    }

    const newBooking = new Booking({
      name,
      mobileNumber,
      address,
      cartItems,
    });

    await newBooking.save();

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

// Endpoint to get all bookings
router.get('/get-bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error getting bookings', error: error.message });
  }
});

module.exports = router;
