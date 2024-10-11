import express from "express";
import userController from "../controllers/userController.js";
import {
  validateUserLogin,
  validateUserSignup,
} from "../middleware/validation/user.js";
import { validate } from "../middleware/validation/validate.js";
const router = express.Router();

router.post("/signup", validateUserSignup(), validate, userController.signup);

router.post("/login", validateUserLogin(), validate, userController.login);

export default router;
