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
        
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return <div>Home</div>;
};
