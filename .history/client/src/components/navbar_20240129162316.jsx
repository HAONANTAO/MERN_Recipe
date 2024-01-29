import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"../pages/home.jsx"}>Home</Link>
      <Link to={"../pages/create-recipe.js"}>Create Recipe</Link>
      <Link to={"../pages/auth.js"}>Auth</Link>
      <Link to={"../pages/saved-recipe.js"}>Saved Recipe</Link>
    </div>
  );
};
