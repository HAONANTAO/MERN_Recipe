import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/auth"}>Auth</Link>
      <Link to={"../pages/saved-recipe.js"}>Saved Recipe</Link>
    </div>
  );
};
