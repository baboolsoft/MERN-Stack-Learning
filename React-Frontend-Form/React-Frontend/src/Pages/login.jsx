import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Components/forminput.jsx";
import API from "../api/api.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", { email, password });

      if (res.data.success) {
        const { data, accessToken } = res.data;

        // Save token for future requests
        localStorage.setItem("accessToken", accessToken);

        alert(`Welcome back ${data.username || data.email}`);
        navigate("/home");
      } else {
        alert("Login failed. Please check your email/password.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
