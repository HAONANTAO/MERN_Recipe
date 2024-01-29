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
      </form>
    </div>
  );
};
