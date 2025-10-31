import { CalendarDays, Mail, MapPin, User } from "lucide-react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    location: "Mumbai, India",
    joined: "Jan 2024",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
      <div className="bg-white rounded-3xl shadow-lg max-w-3xl w-full overflow-hidden">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200"
            alt="cover"
            className="h-40 w-full object-cover"
          />
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <img
              src={user.image}
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="pt-16 px-6 pb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-500 mb-4">{user.email}</p>

          <div className="flex justify-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-500" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={18} className="text-purple-500" />
              <span>Joined {user.joined}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 text-gray-700">
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <User className="text-blue-600 mb-2 mx-auto" size={24} />
              <p className="text-sm font-semibold">Profile Info</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <Mail className="text-purple-600 mb-2 mx-auto" size={24} />
              <p className="text-sm font-semibold">Contact Details</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <CalendarDays className="text-green-600 mb-2 mx-auto" size={24} />
              <p className="text-sm font-semibold">Booking History</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
