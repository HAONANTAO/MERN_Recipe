export const Auth = () => {
  return (
    <div className="auth">
      <Login></Login>
      <Register></Register>
    </div>
  );
};

const Login = () => {
  return <div></div>;
};

const Register = () => {
  return (
    <div className="auth-container">
      <form>
        <h2>Register </h2>
        <div className="form-group">
          <label For="username" to="">
            Username
          </label>
          <input type="text" id="username" onChange={(event) => {}} />

          <label For="password" to="">
            Password
          </label>
          <input type="text" id="password" onChange={(event) => {}} />
        </div>
      </form>
    </div>
  );
};
