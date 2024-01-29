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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth-container">
      <form>
        <h2>Register </h2>
        <div className="form-group">
          <label for="username" to="">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(event) => {
              setUsername = event.target.value;
            }}
          />

          <label for="password" to="">
            Password
          </label>
          <input
            type="text"
            id="password"
            value=
            onChange={(event) => {
              setPassword = event.target.value;
            }}
          />
        </div>
      </form>
    </div>
  );
};
