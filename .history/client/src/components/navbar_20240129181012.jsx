import { Link } from "react-router-dom";
import { useCookie } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookie(["access_token"]);

  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/save-recipe"}>Saved Recipe</Link>
      {!cookies.access_token ? (
        <Link to={"/auth"}>Register/Login</Link>
      ) : (
        <button>Logout</button>
      )}
    </div>
  );
};
