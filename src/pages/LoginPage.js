import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onLogIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        navigate("/articles")
      } catch (error) {
        setError(error.message);
      }
      form.reset();
      setError("");
    } else {
      setError("Enter the Email and Password!");
    }
  };
  return (
    <>
      <form onSubmit={onLogIn}>
        <h3>Login Form</h3>
        <label>Email</label>
        <input type="email" name="email" className="form-control" />
        <label>Password</label>
        <input type="password" name="password" className="form-control"/>
        <button className="button-4" type="submit">Log In</button>
        <p className="error">{!!error && error}</p>
        <Link to="/create-account" className="link-underline-light">
          Don't have an account ? ,Create one here
        </Link>
      </form>
    </>
  );
};
