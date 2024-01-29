import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  //拿到菜单

  //副作用
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        //拿到菜单数据
        const response = axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
        console.log(recipes);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => {
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div className="instruction">
              <p>{recipe.instruction}</p>
            </div>
            <img src={recipe.imgUrl} alt="">
          </li>;
        })}
      </ul>
    </div>
  );
};
