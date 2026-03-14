import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import process from "process";
import userRoutes from "./routes/userRoutes.js";
import memeRoutes from "./routes/memeRoutes.js";

//loading variable from .env
dotenv.config();

//connecting to mongodb atlas
connectDB();

//express
const app = express();

const PORT = process.env.PORT || 5000;

//cors -> allowing cross domain access &express.json() -> converting raw data to java script object(getting req.body)
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/memes", memeRoutes);

app.get("/", (req, res)=>{
    res.send("Meme generator backend service is running now")
});

app.listen(PORT, ()=>{
    console.log(`Server is listenning on port: ${PORT}`)
});