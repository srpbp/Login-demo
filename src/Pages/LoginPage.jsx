import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/LoginPage.css";

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(""); // To handle form-specific errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost/loginDemo/api.php") // Update with your actual API URL
      .then((response) => {
        // setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        // console.error(error);
        setLoading(false);
      });
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    // Simple validation logic
    // const user = users.find((user) => user.email === email && user.password === password);
    const user = email === "markmark@gmail.com" && password === "markmark124";

    if (!user) {
      setFormError("Invalid email or password. Please try again.");
    } else {
      setFormError(""); // Clear any previous error
      navigate("/welcome"); // Navigate on successful login
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login Page</h1>
        <form className="login-form" onSubmit={handleLogin}>
          {formError && <div className="error-message">{formError}</div>} {/* Display form error */}
          <div className="input-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button className="login-btn" name="login_btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;