import { sequelize } from "./config/db.js";
import { Hotel } from "./models/Hotel.js";

await sequelize.sync({ force: true });

await Hotel.bulkCreate([
  {
    name: "Grand Palace Hotel",
    location: "Mumbai",
    description: "Luxury hotel with sea view.",
    price: 4500,
    image: "https://source.unsplash.com/800x400/?hotel,luxury",
  },
  {
    name: "Himalayan Retreat",
    location: "Manali",
    description: "Peaceful stay in the hills.",
    price: 3200,
    image: "https://source.unsplash.com/800x400/?hotel,resort",
  },
  {
    name: "Urban Stay",
    location: "Bangalore",
    description: "Perfect for business travelers.",
    price: 3800,
    image: "https://source.unsplash.com/800x400/?hotel,city",
  },
]);

console.log("Hotels seeded successfully!");
process.exit();
