import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/auth"}>Register/Login</Link>
      <Link to={"/save-recipe"}>Saved Recipe</Link>
    </div>
  );
};
