import User from "../models/User.js";
import { errorHandler } from "../utils/errorHandler.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    next(error);
    console.log(error);
  }
};
