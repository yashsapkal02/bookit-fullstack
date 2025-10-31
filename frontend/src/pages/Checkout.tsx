import { CalendarDays, Clock, Mail, MapPin, User } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const hotel = state?.hotel;
  const selectedDate = state?.selectedDate;
  const selectedTime = state?.selectedTime;

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">
          No booking data found. Please select a hotel first.
        </p>
      </div>
    );
  }

  const handleConfirm = () => {
    if (!userName || !userEmail) {
      alert("Please enter your name and email before confirming!");
      return;
    }

    navigate("/result", {
      state: {
        userName,
        userEmail,
        hotel,
        totalPaid: hotel.price,
        date: selectedDate,
        time: selectedTime,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Image */}
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-[300px] object-cover"
        />

        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-1">
            {hotel.name}
          </h2>
          <div className="flex items-center text-gray-500 mb-5">
            <MapPin size={18} className="mr-2 text-blue-500" />
            <span>{hotel.location}</span>
          </div>

          <p className="text-gray-600 mb-6">{hotel.description}</p>

          {/* Booking Summary */}
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 mb-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Booking Summary
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <CalendarDays size={16} className="text-blue-500" />
                <span>{selectedDate}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} className="text-purple-500" />
                <span>{selectedTime}</span>
              </p>
              <p className="col-span-2">
                <b>Total Price:</b> ₹{hotel.price}
              </p>
            </div>
          </div>

          {/* Guest Info */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <User size={18} className="text-blue-600" /> Full Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <Mail size={18} className="text-purple-600" /> Email Address
            </label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:opacity-90 transition"
          >
            Confirm & Complete Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
