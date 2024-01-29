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
  const recipe = new RecipeModel({
    name:
    ingredients: [{ type: String, required: true }],
    instruction: { type: String, required: true },
    imageUrl: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    userOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  });
  try {
    const response = await RecipeModel.findMany({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});
export { recipeRouter };
