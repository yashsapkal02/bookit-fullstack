import { CalendarDays, MapPin, Star } from "lucide-react";

const Bookings = () => {
  const bookings = [
    {
      id: 1,
      name: "Ocean View Resort",
      date: "2025-10-25",
      location: "Goa, India",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      price: "₹5,000",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Mountain Stay Retreat",
      date: "2025-09-18",
      location: "Manali, India",
      image:
        "https://images.unsplash.com/photo-1600585154154-8e8b0f1e53b7?w=800&q=80",
      price: "₹4,200",
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        🧾 My Bookings
      </h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <img
              src={b.image}
              alt={b.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {b.name}
              </h2>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <MapPin size={16} className="text-blue-500 mr-1" />
                {b.location}
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm font-medium text-gray-700">
                    {b.rating}
                  </span>
                </div>
                <span className="text-blue-600 font-semibold">{b.price}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <CalendarDays size={16} />
                <span>Check-in: {b.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
