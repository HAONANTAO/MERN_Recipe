import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const clearToken = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/save-recipe"}>Saved Recipe</Link>
      {!cookies.access_token ? (
        <Link to={"/auth"}>Register/Login</Link>
      ) : (
        <button onClick={clearToken}>Logout</button>
      )}
    </div>
  );
};
