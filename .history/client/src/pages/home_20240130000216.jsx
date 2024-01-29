import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID.js";
import { useCookies } from "react-cookie";
export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  //拿到菜单

  const userID = useGetUserID();
  //副作用,刚开始初始化一次
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        //拿到菜单数据
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`,
        );

        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      //拿到菜单数据
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });

      setSavedRecipes(response.data.savedRecipes);
    } catch (error) {
      console.log(error);
    }
  };
  const isRecipeSaved = (id) => savedRecipes.includes(id);
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>

              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}>
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
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
