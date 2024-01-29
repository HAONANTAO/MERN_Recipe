import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//json转化给前端
app.use(express.json());
//跨域处理
app.use(cors());

//链接数据库
mongoose.connect(
  "mongodb+srv://Aaron:<password>@recipe.fndmu0c.mongodb.net/?retryWrites=true&w=majority",
);

//监听器
app.listen(3001, () => {
  console.log("Server start！");
});
