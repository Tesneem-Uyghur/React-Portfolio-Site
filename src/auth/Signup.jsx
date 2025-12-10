import { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
import { signup } from '../api/authService';

export default function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",      
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(user)
          .then((data) => {
            if (data.error) alert(data.error);
            else {
              alert("Signup successful! Please sign in.");
              navigate("/signin");
            }
          })
          .catch(() => alert("Signup failed."));
    };

    return (
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input 
              name="name" 
              placeholder="Name" 
              value={user.name}
              onChange={handleChange} 
              required 
            />
            <input 
              name="email" 
              placeholder="Email" 
              type="email" 
              value={user.email}
              onChange={handleChange} 
              required 
            />
            <input 
              name="password" 
              placeholder="Password" 
              type="password" 
              value={user.password}
              onChange={handleChange} 
              required 
            />
            <button type="submit">Register</button>
          </form>
        </div>
    );
}