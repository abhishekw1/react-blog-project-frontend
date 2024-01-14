import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const CreateAccountPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onLogIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (email && password) {
      try {
        if (password !== confirmPassword) {
          setError("Password and confirm password do not match");
          return;
        }
        await createUserWithEmailAndPassword(getAuth(), email, password);
        navigate("/articles");

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
        <h3>Create Account</h3>
        <label>Email</label>
        <input type="email" name="email" className="form-control"/>
        <label>Password</label>
        <input type="password" name="password" className="form-control"/>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" className="form-control"/>
        <button className="button-4" type="submit">Create Account</button>
        <p className="error">{!!error && error}</p>
        <p>Already have an account ? ,<Link to="/login" className="link-underline-light">Click here</Link></p>
      </form>
    </>
  );
};
