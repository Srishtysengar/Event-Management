import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();

   
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    
    const response = await fetch("http://localhost:4001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

   
    const data = await response.json();
    console.log(data.user);

    if (data.user) {
      localStorage.setItem("token", data);
      alert("Login SuceessFull");
      navigate("/home");
    } else {
      alert("Please Check Again");
    }

   
    setEmail("");
    setPassword("");
  }
  
  const handleGuestLogin = () => {
  navigate("/guestpage")
  };

  return (
    <div>      
      <div className="formContainer">      
        <div className="formWrapper">
          <span className="logo">Event Master by Srishty</span>
          <br></br><br></br><br></br>
          <span className="title">Login</span>

          <form onSubmit={handleFormSubmit}>
            <input
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>

            <input
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <div className="login-buttons">
            <button> Login</button>
            <button className="guest-login" onClick={handleGuestLogin}>Guest Login</button>
            </div>
          </form>
          <p>
            Don't you have an Account ? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div> 
      
    </div>
  );
};

export default Login;
