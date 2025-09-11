import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Components/forminput";
import API from "../api/api.js";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", { name, email, password });
      console.log("Register Success:", res.data);

      if (res.data.success) {
        const { data, accessToken } = res.data;

        // Save token for future use
        localStorage.setItem("accessToken", accessToken);

        alert(`Account created for ${data.username}`);
        navigate("/home");
      } else {
        alert("Registration failed. Try again.");
      }
    } catch (err) {
      console.error("Register Error:", err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

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

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
