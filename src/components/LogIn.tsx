
import '../styles/Login.scss';
import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  return (
    <div className='login-container'>
        <div className="top"></div>
  <div className="bottom"></div>
    <div className="login">
      <div className='inputFields'>
      <header className="login-header">
        Log In
      </header>
      <label className='emailTextField'>
        <input type="text" name="emailField" placeholder='Email'/> 
      </label>
      <label className='passwordTextField'>
        <input type="text" name="passwordField" placeholder='Password'/> 
      </label>
      <button id='login-button' > <Link to='/profile'>  Log In </Link></button>
      <div id='signupLink'>
        <Link to='/signup'> Need an account? </Link>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Login;