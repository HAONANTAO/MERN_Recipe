import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID.js";
import { useNavigate } from "react-router-dom";

export const CreateRecipe = () => {
  const UserID = useGetUserID();
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
    userOwner: UserID,
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
  };

  const addIngredient = () => {
    //添加成分
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  //上传
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      //给后端post 数据库
      await axios.post("http://localhost:3001/recipes", recipe);
      console.log(recipe);
      alert("recipe created!");
    } catch (err) {
      console.log(err);
      alert("recipe create failed!");
    }
  };

  const navigate = useNavigate();


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
        <label htmlFor="instruction">Instruction</label>
        <textarea
          id="instruction"
          name="instruction"
          onChange={handleChange}></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">Cooking times within minutes</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};
