// config variables for mongoDB
import dotenv from "dotenv";
dotenv.config();
const config = {
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "password",
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 3123,
  database: process.env.DB_NAME || "comp3123-assign01",
};

export default config;
