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
  try {
    // Use findOne with a condition based on username only
    const user = await UserModel.findOne({ username: username });

    if (user) {
      //如果有一样的username
      res.status(401).json({ message: "user exist,can not register" });
   
  //salt 加密密码
  const hasedPassword = await bcrypt.hash(password, 10);
});

//登录
userRouter.post("/login");

export { userRouter };
