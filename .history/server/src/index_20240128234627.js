import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//json转化给前端
app.use(express.json());
//跨域处理
app.use(cors());
mongodb+srv://Aaron:<password>@recipe.fndmu0c.mongodb.net/
//链接数据库
mongoose.connect(
  "mongodb+srv://Aaron:Aaron1314@recipe.fndmu0c.mongodb.net/?retryWrites=true&w=majority",
);
// 获取默认连接
const db = mongoose.connection;

// 监听连接成功事件
db.on("connected", () => {
  console.log("MongoDB connected successfully!");
}); // 监听连接失败事件

//监听器
app.listen(3001, () => {
  console.log("Server start!");
});
