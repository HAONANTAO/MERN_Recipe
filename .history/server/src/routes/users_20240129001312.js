import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//引入后端要加.js
import { UserModel } from "../models/Users.js";
//路由
const userRouter = express.Router();

//注册
userRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({
    username: username,
    password: password,
  });
  res.json(user);
});

//登录
userRouter.post("/login");

export { userRouter };