import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
RecipeModel;

const recipeRouter = express.Router();

recipeRouter.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.findMany();
  } catch (err) {
    res.json(err);
  }
});
export { recipeRouter };
