import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//路由
const userRouter = express.Router();

userRouter.post("/register")

export { userRouter };
