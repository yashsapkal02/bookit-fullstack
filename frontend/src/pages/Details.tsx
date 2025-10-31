import axios from "axios";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/hotels/${id}`);
        setHotel(res.data);
      } catch (err) {
        console.error("Error fetching hotel details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold">Hotel not found!</p>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time before continuing!");
      return;
    }

    navigate("/checkout", {
      state: { hotel, selectedDate, selectedTime },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Image */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-[450px] object-cover"
        />

        {/* Info Section */}
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {hotel.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-blue-600" />
                <p>{hotel.location}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-3xl font-bold text-green-600">
                ₹{hotel.price}
              </span>
              <p className="text-sm text-gray-500">per night</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            {hotel.description}
          </p>

          {/* Date Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
              <CalendarDays size={18} className="text-blue-600" /> Select
              Check-in Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Time Slots */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
              <Clock size={18} className="text-purple-600" /> Choose Time Slot
            </label>
            <div className="flex flex-wrap gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                    selectedTime === time
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:opacity-90 transition"
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
