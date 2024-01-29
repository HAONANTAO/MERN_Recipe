import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//路由
const userRouter = express.Router();

//注册
userRouter.post("/register");
userRouter.post("/login");

export { userRouter };
