import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import {UserModel} from "../"
const recipeRouter = express.Router();

recipeRouter.get("/", async (req, res) => {
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
  const recipe = await RecipeModel.findById(req.body.recipeID);
  const user = await UserModel
  {
    userId, recipeId;
  }
  try {
    await recipe.save();
    res.json(recipe);
  } catch (err) {
    res.json(err);
  }
});
export { recipeRouter };
