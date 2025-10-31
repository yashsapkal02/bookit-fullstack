interface HotelCardProps {
  name: string;
  location: string;
  price: number;
  image: string;
  onClick: () => void;
}

export default function HotelCard({ name, location, price, image, onClick }: HotelCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
    >
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-blue-600 font-bold text-lg">₹{price}/night</p>
          <span className="text-sm text-gray-400">View Details →</span>
        </div>
      </div>
    </div>
  );
}
