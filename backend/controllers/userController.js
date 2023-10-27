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

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return next(errorHandler(403, "User not found"));

    res.status(200).json(user);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { firstName, lastName, email, password, industry, headline, additionalName, education, country, city } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return next(errorHandler(404, "user not found"));
    if (req.user.id !== req.params.id) return next(errorHandler(404, "You have no rights to perform this action"));
    const userName = firstName?.charAt(0).toLowerCase() + lastName?.split("")[0].toUpperCase() + lastName?.slice(1);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        email,
        userName,
        password,
        industry,
        headline,
        additionalName,
        education,
        country,
        city
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
    console.log(error);
  }
};
