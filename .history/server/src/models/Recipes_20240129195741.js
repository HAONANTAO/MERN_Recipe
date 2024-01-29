import mongoose from "mongoose";
const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true},
  password: { type: String, required: true },
});
const RecipeModel = mongoose.model("recipe", RecipeSchema);
export { RecipeModel };
