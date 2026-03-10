import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import process from "process";

//loading variable from .env
dotenv.config();

//connecting to mongodb atlas
connectDB();


//express
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Meme generator backend service is running now")
});

app.listen(PORT, ()=>{
    console.log(`Server is listenning on port: ${PORT}`)
});