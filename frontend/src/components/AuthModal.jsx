import { X } from "lucide-react";
import { useState } from "react";

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user info in localStorage
    const userData = {
      name: isSignup ? formData.name : "User",
      email: formData.email,
      isLoggedIn: true,
    };

    localStorage.setItem("bookitUser", JSON.stringify(userData));
    alert(isSignup ? "Account created successfully!" : "Logged in successfully!");

    // Notify parent (Navbar) about login
    onLogin(userData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white w-96 rounded-2xl shadow-xl p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {isSignup ? "Create an Account" : "Welcome Back!"}
        </h2>
        <p className="text-gray-500 text-center mb-6">
          {isSignup ? "Sign up to start booking your dream stays" : "Login to continue"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Switch Mode */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
