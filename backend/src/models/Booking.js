import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Hotel } from "./Hotel.js";

export const Booking = sequelize.define("Booking", {
  userName: { type: DataTypes.STRING, allowNull: false },
  userEmail: { type: DataTypes.STRING, allowNull: false },
  checkIn: { type: DataTypes.DATE, allowNull: false },
  checkOut: { type: DataTypes.DATE, allowNull: false },
  totalAmount: { type: DataTypes.FLOAT },
});

// ✅ Set foreign key manually (avoid duplication)
Hotel.hasMany(Booking, { foreignKey: "hotelId" });
Booking.belongsTo(Hotel, { foreignKey: "hotelId" });
