import { body, validationResult } from "express-validator";

// parse errors after validation and return response to user
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = errors.array().map((err) => err.msg);
  return res.status(400).json({ errors: extractedErrors });
};
