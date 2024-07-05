import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Style.css";
import { AppContext } from "../../contexts/AppContext";
const Login = () => {
  const { login, user } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (username !== "" || password !== "") {
      login({ username, password });
      navigate("/");
    }
    console.log("Enter all details");
    setUsername("");
    setPassword("");
  };
  if (user) {
    <Navigate to={"/"} />;
  }
  return (
    <div className="form-container">
      <form onSubmit={handleClick}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
