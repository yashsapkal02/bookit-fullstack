import axios from "axios";
import { MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/hotels");
        setHotels(res.data);
      } catch (err) {
        console.error("Error fetching hotels:", err);
      }
    };
    fetchHotels();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Stay</h1>
        <p className="text-lg opacity-90 mb-6">
          Discover, explore, and book top-rated hotels around the world 🌍
        </p>
        <a
          href="#hotels"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          Start Exploring
        </a>
      </section>

      {/* Hotel Listing */}
      <section id="hotels" className="p-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Hotels
        </h2>

        {hotels.length === 0 ? (
          <p className="text-center text-gray-500">Loading hotels...</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel) => (
              <Link
                key={hotel.id}
                to={`/details/${hotel.id}`}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 cursor-pointer"
              >
                {/* Clickable Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-md">
                    ₹{hotel.price}/night
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center text-gray-500 mt-1 mb-3">
                      <MapPin size={16} className="mr-1 text-blue-500" />
                      <span>{hotel.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {hotel.description}
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#fbbf24" stroke="#fbbf24" />
                      ))}
                    </div>
                  </div>

                  {/* View Details Button (kept for UX clarity) */}
                  <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-xl text-center font-medium hover:opacity-90 transition">
                    View Details
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white mt-10 border-t">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} BookIt — Designed with ❤️ like Airbnb
        </p>
      </footer>
    </div>
  );
};

export default Home;
