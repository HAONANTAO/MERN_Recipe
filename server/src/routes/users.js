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

  // Use findOne with a condition based on username only
  const user = await UserModel.findOne({ username: username });

  if (user) {
    //如果有一样的username
    res.status(401).json({ message: "user exists, cannot register" });
    console.log("user exist,can not register");
    return;
  }

  //salt 加密密码
  const hasedPassword = await bcrypt.hash(password, 10);

  //传入新的信息，但是是加密密码
  const newUser = new UserModel({
    username: username,
    password: hasedPassword,
  });
  await newUser.save();
  res.json({ message: "User registered successfully!" });
});

//登录
userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Use findOne with a condition based on username only
  const user = await UserModel.findOne({ username: username });

  if (!user) {
    res.status(401).json({ message: "user not found" });
    return;
  }

  //对比hash之后的密码
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    res.status(401).json({ message: "incorrect password" });
    return;
  }
  //给一个token和名字

  const token = jwt.sign({ id: user._id }, "secret");
  //都符合条件了
  res.json({ token, userID: user._id });
  // res.json({ message: "log in successfully!" });
});
export { userRouter };
