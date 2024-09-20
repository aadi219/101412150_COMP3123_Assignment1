import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8081;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
