import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//路由
const userRouter = express.Router();

//注册
userRouter.post("/register", async (req, res) => {
  try {
    const{} = req.body
  } catch {}
});

//登录
userRouter.post("/login");

export { userRouter };
