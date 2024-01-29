import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {UserModel} from "../models/Users"
//路由
const userRouter = express.Router();

//注册
userRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
  } catch {}
});

//登录
userRouter.post("/login");

export { userRouter };
