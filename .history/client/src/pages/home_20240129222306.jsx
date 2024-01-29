import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID.js";
export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  //拿到菜单

  //副作用,刚开始初始化一次
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        //拿到菜单数据
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        console.log(recipes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      //拿到菜单数据
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      console.log(response);
      console.log(recipes);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button onClick={() => saveRecipe(recipe_id)}>Saved</button>
            </div>
            <div className="instruction">
              <p>{recipe.instruction}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time : {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
