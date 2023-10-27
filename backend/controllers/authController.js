import User from "../models/User.js";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return next(errorHandler(404, "invalid credentials"));
    const isValidPwd = bcrypt.compareSync(password, user.password);
    if (!isValidPwd) return next(errorHandler(403, "invalid credentials"));

    //generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    user.password = undefined;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const register = async (req, res, next) => {
  const { firstName, lastName, email, password, industry, headline, additionalName, education, country, city } = req.body;
  try {
    const userName = firstName?.charAt(0)?.toLowerCase() + lastName?.split("")[0]?.toUpperCase() + lastName?.slice(1);
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password,
      industry,
      headline,
      additionalName,
      education,
      country,
      city
    });
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//login with google
export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(user);
    } else {
      const randomPassword = Math.random()
        .toString(36)
        .slice(-8);
      const firstName = req.body.name.split(" ")[0];
      const lastName = req.body.name.split(" ")[1];
      const userName =
        req.body.name.split(" ").join("") +
        Math.floor(Math.random() * 1000)
          .toString(36)
          .slice(-8);
      const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        userName,
        email: req.body.email,
        avatar: req.body.avatar,
        password: randomPassword
      });
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(newUser);
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};
export const logout = async (req, res, next) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json("You have been logged out!");
};
