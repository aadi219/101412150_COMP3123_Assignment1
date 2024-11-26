import Employee from "../models/Employee.js";

// implementations for all methods to resolve requests to the employee endpoints

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find({});
  return res.status(200).json(employees);
};

const createEmployee = async (req, res) => {
  let {
    first_name,
    last_name,
    salary,
    email,
    position,
    date_of_joining,
    department,
  } = req.body;
  try {
    const emp = new Employee({
      first_name,
      last_name,
      email,
      position,
      date_of_joining,
      department,
      salary,
    });
    await emp.save();
    return res.status(201).json({
      message: "Employee created successfully.",
      employee_id: emp._id,
    });
  } catch (err) {
    console.error("[ERROR] Could not create Employee", err);
    return res.status(500).json({ err: "Internal Server Error" });
  }
};

const getEmployeeById = async (req, res) => {
  const id = req.params.eid;
  const employee = await Employee.findById(id);
  return res.status(200).json(employee);
};

const updateEmployeeById = async (req, res) => {
  const id = req.params.eid;
  try {
    await Employee.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: "Employee updated successfully." });
  } catch (err) {
    console.error("[ERROR] Could not update Employee", err);
    return res.status(500).json({ err: "Internal Server Error" });
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    const id = req.query.eid;
    await Employee.findByIdAndDelete(id);
    return res.status(204).json({ message: "Employee deleted successfully." });
  } catch (err) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};

export default {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
