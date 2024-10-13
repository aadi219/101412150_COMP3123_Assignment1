import { body, oneOf, checkSchema } from "express-validator";

// returns validation chain for login
export const validateUserLogin = () => [
  // request must contain either username or email
  oneOf([body("username").notEmpty(), body("email").notEmpty()], {
    message: "Please provide either username or email",
  }),
  // request must contain password
  body("password", "Password cannot be empty").notEmpty(),
];


// returns validation for signup
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
