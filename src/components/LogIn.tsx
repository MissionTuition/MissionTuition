
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  return (
    <div className="login">
      <header className="login-header">
        Login
      </header>
      <Link to='/profile'>
        Login
      </Link>
      <Link to='/signup'>
        Need an account? Sign up!
      </Link>
    </div>
  );
}

export default Login;