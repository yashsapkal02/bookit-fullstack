import { Menu, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("bookitUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("bookitUser");
    setUser(null);
    alert("Logged out successfully!");
  };

  return (
    <>
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          BookIt
        </Link>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center border border-gray-300 rounded-full px-4 py-2 hover:shadow-sm transition">
          <input
            type="text"
            placeholder="Search destinations..."
            className="outline-none text-sm text-gray-600 w-40"
          />
          <Search size={18} className="text-gray-400 ml-2" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          <div className="hidden sm:flex gap-6 text-gray-700 font-medium">
            <Link
              to="/"
              className={`hover:text-blue-600 ${
                location.pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-blue-600 ${
                location.pathname === "/about" ? "text-blue-600" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`hover:text-blue-600 ${
                location.pathname === "/contact" ? "text-blue-600" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Dropdown Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 hover:shadow-md transition"
          >
            <Menu size={18} className="text-gray-600" />
            <User size={20} className="text-gray-600" />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded-xl border border-gray-100 py-2 animate-fadeIn">
              {user ? (
                <>
                  <p className="px-4 py-2 text-gray-800 font-semibold">
                    👋 {user.name || "User"}
                  </p>
                  <Link
                    to="/bookings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Bookings
                  </Link>
                  <hr className="my-1 border-gray-200" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setAuthModalOpen(true);
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  Login / Signup
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLogin={setUser}
      />
    </>
  );
};

export default Navbar;
