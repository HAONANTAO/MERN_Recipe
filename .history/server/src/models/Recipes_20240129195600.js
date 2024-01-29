import mongoose from "mongoose";
const RecipeSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const RecipeModel = mongoose.model("recipe", RecipeSchema);
export { RecipeModel };
