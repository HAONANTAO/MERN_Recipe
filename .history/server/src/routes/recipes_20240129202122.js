import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
RecipeModel;

const recipeRouter = express.Router();

recipeRouter.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.findMany({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

recipeRouter.post("/", async (req, res) => {
  // name:
  // ingredients:
  // instruction:
  // imageUrl:
  // cookingTime:
  // userOwner:

  //结构赋值
  const recipe = new RecipeModel(...req.body);
  try {
    const response = await recipe.findMany({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});
export { recipeRouter };
