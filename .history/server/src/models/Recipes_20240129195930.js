import mongoose from "mongoose";
const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instruction: { type: String, required: true },
  imageUrl: { type: String, required: true },
  cookingTime:{}
});
const RecipeModel = mongoose.model("recipe", RecipeSchema);
export { RecipeModel };
