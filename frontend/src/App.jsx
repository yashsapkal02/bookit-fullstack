import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bookings from "./Bookings";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Profile from "./Profile";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/result" element={<Result />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
