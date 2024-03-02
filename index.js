import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import hallRoutes from './routes/hall.route.js'

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.use("/api", hallRoutes);

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL;

//Connecting DB
mongoose
  .connect(DATABASE_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is running on Port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
