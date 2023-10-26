import express from "express";
import colors from "colors";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import path from "path";
import morgan from "morgan";

dotenv.config();
const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 5008;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(morgan());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/companies", companyRoutes);
//test route

//hosting configurations
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
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
