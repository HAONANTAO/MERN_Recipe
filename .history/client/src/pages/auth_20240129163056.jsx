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
          <label htmlFor="username" to="">
            Username
          </label>
          <input type="text" id="username" onC/>
        </div>
      </form>
    </div>
  );
};
