import express from "express";
import connectToDB from "./data/connectToDB.js";
import dotenv from "dotenv";
import cors from 'cors'
import { userRoutes, empRoutes } from "./routes/index.js";
import verifyJWT from "./middleware/auth.js";

dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 8082;

connectToDB();

const corsOptions = {
  origin: "*"
}
app.use(cors(corsOptions));

// middleware
app.use(express.json());
// use routing
const endpoint = "/api/v1";
// JWT Auth
app.use(`${endpoint}/emp`, verifyJWT);
// routing
app.use(`${endpoint}/user`, userRoutes);
app.use(`${endpoint}/emp`, empRoutes);

// error
app.use((err, req, res, next) => {
  if (err) {
    console.error("[ERROR] error occurred while processing request at " + req.path);
    res.status(500).send("An unexpected error occurred!");
  } else {
    next();
  }
})

// start server
const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
