// AuthForm.js
import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import "./loginmonitor.css";

function LoginMonitor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleAuthAction = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/admin");
      }
      setError("");
      alert("You have successfully logged in");
    } catch (error) {
      setError("Wrong Email or Password");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/admin");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="login-monitor-main-container">
      <h1 className="font2">{isRegister ? "Register" : "Login"}</h1>
      <form className="login-monitor-form" onSubmit={handleAuthAction}>
        <div className="login-input-container">
          <label className="f1-2 font2">Email:</label>
          <input
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-input-container">
          <label className="f1-2 font2">Password:</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-error-container">
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <button className="login-button font2 f1-2" type="submit">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Switch to Login" : "Switch to Register"}
      </button>
    </div>
  );
}

export default LoginMonitor;
