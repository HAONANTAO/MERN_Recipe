import { useEffect, useState } from "react";
export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  //拿到菜单

  //副作用
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = axios.post("")
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return <div>Home</div>;
};
