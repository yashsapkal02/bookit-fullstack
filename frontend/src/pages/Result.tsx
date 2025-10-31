import { CalendarDays, CheckCircle, Clock, Mail, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { userName, userEmail, hotel, totalPaid, date, time } = state || {};

  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">
          No booking details available. Please make a booking first.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-lg w-full">
        <div className="text-green-500 mb-4 flex justify-center">
          <CheckCircle size={60} />
        </div>

        <h2 className="text-3xl font-bold text-green-700 mb-2">
          Booking Confirmed!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you, <b>{userName || "Guest"}</b>! A confirmation has been sent
          to <b>{userEmail || "your email"}</b>.
        </p>

        {/* Booking Details */}
        <div className="bg-gray-100 p-5 rounded-xl text-left space-y-2 mb-6">
          <p className="flex items-center gap-2">
            <MapPin size={18} className="text-blue-500" />
            <b>{hotel.name}</b> — {hotel.location}
          </p>
          <p className="flex items-center gap-2">
            <CalendarDays size={18} className="text-purple-500" />
            Check-in Date: {date}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={18} className="text-indigo-500" />
            Time: {time}
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} className="text-pink-500" />
            Email: {userEmail}
          </p>
          <p>
            <b>Total Paid:</b> ₹{totalPaid || 0}
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
