import express from "express";
import cors from "cors";
import { corsOptions } from "./config/corsOptions.js";
import { configDotenv } from "dotenv";

// dotenv configured
configDotenv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors(corsOptions));

app.get("/api/v1/", (req, res) => {
  res.json({ status: true, message: "ok" });
});

export default app;
