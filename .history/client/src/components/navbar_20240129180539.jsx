import { Link } from "react-router-dom";
import {useCookie} from " react-cookie";
export const Navbar = () => {
  const [_,setCookie]
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/save-recipe"}>Saved Recipe</Link>
      <Link to={"/auth"}>Register/Login</Link>
    </div>
  );
};
