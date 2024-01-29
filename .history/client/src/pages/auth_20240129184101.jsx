import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export const Auth = () => {
  return (
    <div className="auth">
      <Login></Login>
      <Register></Register>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });

      alert("Register completed, you can login now!");
    } catch (error) {
      alert(error);
    } finally {
      const usernameInput = document.getElementById("Registerusername");
       document.getElementById("Registerpassword");
      console.log()
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Register"
      onSubmit={onSubmit}></Form>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookie] = useCookies(["access_token"]);
  //重定向
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      alert("Login in is good!" + response.data);
      //存cookie
      setCookie("access_token", response.data.token);
      //存id
      window.localStorage.setItem("userID", response.data.userID);
      //返回主页面
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}></Form>
  );
};
//表单组件
const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id={`${label}username`}
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id={`${label}password`}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>{" "}
        <button type="submit">{label}</button>
      </form>
    </div>
  );
};
