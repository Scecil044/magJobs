import Company from "../models/Company.js";
import { verifyUser } from "../utils/middleware.js";
import express from "express";
import { createCompany, updateCompany, deleteCompany, getCompany, getCompanies } from "../controllers/companiesController.js";

const router = express.Router();

//routes
router.get("/get/company/:id", getCompany);
router.get("/get/companies", getCompanies);
router.post("/create/company", verifyUser, createCompany);
router.put("/update/company/:id", verifyUser, updateCompany);
router.delete("/delete/company/:id", verifyUser, deleteCompany);

export default router;
