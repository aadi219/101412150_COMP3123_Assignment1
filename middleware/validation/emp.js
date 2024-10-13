import { param, checkSchema } from "express-validator";

// validate if incoming employee details in request are valid
export const validateEmployeeCreate = () => checkSchema({
  first_name: {
    errorMessage: "Please provide a first name.",
    notEmpty: true
  },
  last_name: {
    errorMessage: "Please provide a last name.",
    notEmpty: true
  },
  email: {
    errorMessage: "Please provide a email.",
    notEmpty: true,
    isEmail: true
  },
  position: {
    errorMessage: "Please provide a position.",
    notEmpty: true
  },
  salary: {
    errorMessage: "Please provide a salary.",
    notEmpty: true,
    isInt: true
  },
  date_of_joining: {
    errorMessage: "Please provide a date of joining.",
    notEmpty: true
  },
  department: {
    errorMessage: "Please provide a department.",
    notEmpty: true
  }
})

