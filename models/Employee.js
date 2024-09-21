import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    position: String,
    date_of_joining: Date,
    department: String,
  },
  {
    timestamps: true,
  },
);

const Employee = mongoose.model("Employee", EmployeeSchema);
export default Employee;
