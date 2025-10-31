import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME || "bookit_db",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};
