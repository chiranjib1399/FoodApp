import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import { preProcessFile } from "typescript";
import foodRouter from './routers/food.router';
import {connectDB }from './config/datsbase.config'
import userRouter from "./routers/user.router";

const app = express();
app.use(express.json())

connectDB();

app.use(cors({
    credentials:true,
    origin: ["http://localhost:4200"]
}))

app.use("/api/foods",foodRouter);
app.use("/api/users", userRouter);
const port = 5000;

app.listen(port ,()=>{
    console.log("Server is listing on http://localhost:" + port);
    
})