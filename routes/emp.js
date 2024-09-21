import Employee from "../models/Employee.js";
import express from "express";

const router = express.Router();

router.get("employees", (req, res) => {});

router.post("employees", (req, res) => {});

router.get("employees/:eid", (req, res) => {});

router.put("employees/:eid", (req, res) => {});

router.delete("employee", (req, res) => {});
export default router;
