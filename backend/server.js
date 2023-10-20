import express from "express";
import colors from "colors";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5008;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api/auth", authRoutes);
//test route
app.get("/", (req, res) => {
  res.status(200).json("welcome sir");
});

//middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "server error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`.cyan.underline);
});
//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`mongoDb connection successful`);
  })
  .catch(err => {
    console.log(err);
  });