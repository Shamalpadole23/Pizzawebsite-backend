// models/booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  address: String,
  cartItems: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
