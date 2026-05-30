import { Router } from "express";
import {
  createEmployees,
  deleteEmployees,
  getEmployees,
  updateEmployees,
} from "../controllers/employeeController";

const employeeRouter = Router();

employeesRouter.get("/", getEmployees);
employeesRouter.get("/", createEmployees);
employeesRouter.get("/:id", updateEmployees);
employeesRouter.get("/:id", deleteEmployees);
