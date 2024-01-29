import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";
import {verifyToken} from "../routes/"
const recipeRouter = express.Router();

recipeRouter.get("/", verifyToken, async (req, res) => {
  try {
    const response = await RecipeModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

recipeRouter.post("/", async (req, res) => {
  //结构赋值
  const recipe = new RecipeModel({ ...req.body });
  try {
    await recipe.save();
    res.json(recipe);
  } catch (err) {
    res.json(err);
  }
});

//save
recipeRouter.put("/", async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

//展示收藏的菜单
recipeRouter.get("/saveRecipes/ids/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

recipeRouter.get("/saveRecipes/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user.savedRecipes },
    });

    res.json({ savedRecipes: savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

export { recipeRouter };
