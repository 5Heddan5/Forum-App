import React from 'react';
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <>
      <h1>Homepage</h1>


      <p className="register-link">
        Login<Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default Landingpage;
