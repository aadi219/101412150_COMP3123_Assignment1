import { body, oneOf, checkSchema } from "express-validator";

export const validateUserLogin = () => [
  oneOf([body("username").notEmpty(), body("email").notEmpty()], {
    message: "Please provide either username or email",
  }),
  body("password", "Password cannot be empty").notEmpty(),
];

