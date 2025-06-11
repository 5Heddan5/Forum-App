import React from 'react';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <>
      <h1>Register</h1>
      <form className="login-form">
        <input name="username" placeholder="username" className="login-input" />
        <input name="email" placeholder="email" className="login-input" />
        <input name="password" placeholder="password" className="login-input" />

        <button type="submit" className="login-button">
          Register
        </button>
      </form>

      <p className="register-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default Register;
