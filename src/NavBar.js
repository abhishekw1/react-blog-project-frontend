import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

export const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Awebtec Blogs</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Atricles</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {user ? (
            <button
              onClick={() => {
                signOut(getAuth());
              }}
            >
              Log Out
            </button>
          ) : (
            <button className="button-4" onClick={() => navigate("/login")}>Log In</button>
          )}
        </li>
      </ul>
    </nav>
  );
};
