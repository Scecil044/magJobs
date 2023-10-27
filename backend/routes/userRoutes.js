import express from "express";
import { getUsers, updateUser, getUser } from "../controllers/userController.js";
import { verifyUser } from "../utils/middleware.js";

const router = express.Router();

router.get("/get/users", getUsers);
router.get("/get/user/:id", getUser);
router.put("/update/user/:id", verifyUser, updateUser);

export default router;
