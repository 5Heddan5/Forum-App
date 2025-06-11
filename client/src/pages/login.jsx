import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
      <h1>Login</h1>
      <form className="login-form">
        <input name="username" placeholder="username" className="login-input" />
        <input name="email" placeholder="email" className="login-input" />
        <input name="password" placeholder="password" className="login-input" />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </>
  );
}

export default Login;
