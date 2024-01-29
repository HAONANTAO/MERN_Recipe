import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"../pages/create-recipe.js"}>Create Recipe</Link>
      <Link to={"../pages/auth.js"}>Home</Link>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
