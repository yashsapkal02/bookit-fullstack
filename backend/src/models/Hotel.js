import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Hotel = sequelize.define("Hotel", {
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: { type: DataTypes.STRING },
});
