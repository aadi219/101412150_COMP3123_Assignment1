import empController from "../controllers/empController.js";
import { validateEmployeeCreate } from "../middleware/validation/emp.js";
import { validate } from "../middleware/validation/validate.js";
import express from "express";

const router = express.Router();

router.get("/employees", empController.getAllEmployees);

router.get("/employees/filter", empController.filterEmployees);

router.post("/employees", validateEmployeeCreate(), validate, empController.createEmployee);

router.get("/employees/:eid", empController.getEmployeeById);

router.put("/employees/:eid", empController.updateEmployeeById);

router.delete("/employees", empController.deleteEmployeeById);
export default router;
