import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../api/authService";

export default function Signin() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(user)
      .then((data) => {
        if (data.error) alert(data.error);
        else {
          localStorage.setItem("jwt", JSON.stringify(data));
          alert("Login successful");
          navigate("/");
        }
      })
      .catch(() => alert("Signin failed."));
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
