import express from "express";
import { verifyUser } from "../utils/middleware.js";
import { login, register, logout, googleAuth } from "../controllers/authController.js";

const router = express.Router();

//routes
router.post("/login", login);
router.post("/register", register);
router.post("/googleAuth", googleAuth);
router.get("/logout", verifyUser, logout);

export default router;
