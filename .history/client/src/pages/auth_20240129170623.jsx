import React, { useState } from "react";
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
  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}></Form>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}></Form>
  );
};

//表单组件
const Form = ({ username, setUsername, password, setPassword }) => {
  return (
    <div className="auth-container">
      <form>
        <h2>Register </h2>
        <div className="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => {
              setUsername = event.target.value;
            }}
          />

          <label for="password">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword = event.target.value;
            }}
          />
        </div>
      </form>
      <button type="submit"> ${label}</button>
    </div>
  );
};
