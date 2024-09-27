import express from "express";
import mongoose from "mongoose";
import dbConfig from "./data/config.js";
import bodyParser from "body-parser";
import { userRoutes, empRoutes } from "./routes/index.js";

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

// middleware
app.use(bodyParser.json());
// use routing
const endpoint = "/api/v1";
app.use(`${endpoint}/user`, userRoutes);
app.use(`${endpoint}/emp`, empRoutes);

// start server
const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
