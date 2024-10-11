import { body, oneOf, checkSchema } from "express-validator";

export const validateUserLogin = () => [
  oneOf([body("username").notEmpty(), body("email").notEmpty()], {
    message: "Please provide either username or email",
  }),
  body("password", "Password cannot be empty").notEmpty(),
];

export const validateUserSignup = () =>
  checkSchema({
    username: {
      notEmpty: true,
      errorMessage: "Please provide a valid username."
    },
    email: {
      notEmpty: true,
      isEmail: true,
      errorMessage: "Please provide a valid email."
    },
    password: {
      notEmpty: true,
      errorMessage: "Please provide a valid password."
    },
  });
