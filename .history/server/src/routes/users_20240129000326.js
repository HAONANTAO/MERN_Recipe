import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.JS";
//路由
const userRouter = express.Router();

//注册
userRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({
      username: username,
      password: password,
    });
    res.json(user);
  } catch {
    res.status(500).json({ message: "Can not find the user" });
  }
});

//登录
userRouter.post("/login");

export { userRouter };
