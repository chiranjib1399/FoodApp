import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import { sample_foods, sample_tag } from "./data";
import { preProcessFile } from "typescript";
import foodRouter from './routers/food.router';
import {conDB }from './config/datsbase.config'
const app = express();

conDB();

app.use(cors({
    credentials:true,
    origin: ["http://localhost:4200"]
}))

app.use("/api/foods",foodRouter)
const port = 5000;

app.listen(port ,()=>{
    console.log("Server is listing on http://localhost:" + port);
    
})