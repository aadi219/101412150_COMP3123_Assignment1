import dbConfig from "./config.js";
import mongoose from "mongoose";

const connectToDb = () => {
  // connect to mongoDB
  const connString = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@cluster0.tfwphvd.mongodb.net/${dbConfig.database}?retryWrites=true&w=majority&appName=Cluster0`;
  mongoose
    .connect(connString, {
      authSource: "admin",
    })
    .then(() => {
      console.log("Connected to Mongo Database");
    })
    .catch((err) => {
      console.error(
        `[ERR] Error occurred when attempting to connect to MongoDB: `,
        err,
      );
    });
};

export default connectToDb;
