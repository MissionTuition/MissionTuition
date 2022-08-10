
import React from 'react';
import '../styles/SignUp.scss';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='signUp-container'>
        <div class="top"></div>
  <div class="bottom"></div>
      <div className="signUp">
        <div className='inputFields'>
        <header className="signUp-header">
          SignUp
        </header>
        <label className='firstTextField'>
          <input type="text" name="firstName" placeholder="First Name"/>
        </label>
        <label className='lastTextField'>
          <input type="text" name="lastName" placeholder="Last Name"/>
        </label>
        <label className='userTextField'>
          <input type="text" name="userName" placeholder="Username"/>
        </label>
        <label className='emailTextField'>
          <input type="text" name="emailField" placeholder='Email'/> 
        </label>
        <label className='passwordTextField'>
          <input type="text" name="passwordField" placeholder='Password'/> 
        </label>
        <button id='signUp-button' > <Link to='/login'> Sign Up </Link> </button>
        <div id='logIn-link'>
          <Link to='/login'> Have an account? Log in! </Link>
        </div>
        </div>
        </div>
    </div>
  );
}

export default SignUp;
