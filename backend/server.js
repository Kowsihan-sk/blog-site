import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import router from "./routes/route.js";

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`server running on PORT : ${PORT}`);
})