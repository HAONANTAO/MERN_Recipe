import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/create"}>Create Recipe</Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
