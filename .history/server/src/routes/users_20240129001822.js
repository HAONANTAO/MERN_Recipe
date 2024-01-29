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
      // Check if the password matches
      if (user.password === password) {
        // Send the user data as a response
        res.json(user);
      } else {
        // Password doesn't match
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      // User not found
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error finding user:", error);
    res.status(500).json({ message: "Error finding user:" });
  }
});

//登录
userRouter.post("/login");

export { userRouter };
