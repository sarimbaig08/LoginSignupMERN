import express from "express";
import mongoose from "mongoose";
import route from "./route/route.js";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("mongodb connect"))
  .catch((err) => console.log("mongo err", err.message));

app.use(route);

app.listen(PORT, () => console.log("server running of port 8080"));
