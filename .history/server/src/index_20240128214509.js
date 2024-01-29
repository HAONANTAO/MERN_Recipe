import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//json转化给前端
app.useCallback(express.json());
//跨域处理
app.use(cors());

app.listen(3001,()=>{})