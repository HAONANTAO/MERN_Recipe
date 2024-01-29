import { useState } from "react";
import axios from "axios";
export const CreateRecipe = () => {
  //   name:
  // ingredients:
  // instruction:
  // imageUrl:
  // cookingTime:
  // userOwner:
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instruction: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });

  //简化了每一个需要的步骤，对应name和value直接替换
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    //替代
    setRecipe({ ...recipe, ingredients: ingredients });
    console.log(recipe);
  };

  const addIngredient = () => {
    //添加成分
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  //上传
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, idx) => (
          <input
            key={idx}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, idx)}
          />
        ))}

        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions"></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" name="imageUrl" />
        <label htmlFor="cookingTime">Cooking times within minutes</label>
        <input type="number" id="cookingTime" name="cookingTime" />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};
