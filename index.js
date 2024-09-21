import express from "express";
import mongoose from "mongoose";
import dbConfig from "./data/config.js";

const app = express();
const PORT = 8082;

const connString = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
// connect to mongoDB
mongoose
  .connect(connString, {
    authSource: "admin",
  })
  .then(() => {
    console.log("Connected to Mongo Database");
  })
  .catch(() => {
    console.err(
      `[ERR] Error occurred when attempting to connect to MongoDB: `,
      err,
    );
  });

// start server
const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
