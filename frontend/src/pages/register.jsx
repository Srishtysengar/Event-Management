import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!email || !name || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("https://event-management-five-pied.vercel.app/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      console.log(data);
      navigate("/login");

      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Event Master by Srishty</span>
        <br></br>
        <br></br>
        <br></br>
        <span className="title">Register</span>
        <br></br>

        <form onSubmit={handleFormSubmit}>
          <input
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
