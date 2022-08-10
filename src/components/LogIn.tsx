import '../styles/Login.scss';
import {  Link, useNavigate } from 'react-router-dom';
import  React, { useState} from 'react';

const useInput = (initial) => {
  const [value, setValue] = useState(initial)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return [value, onChange];
}

function Login() {
  const [email, emailOnChange] = useInput(''); 
  const [inputPassword, inputPasswordOnChange] = useInput(''); 


  const navigate = useNavigate()
  const navigateToProfile = () => {
    navigate('/Profile')
  }

  const checkUser = () => {
    const body = {
      email, 
      inputPassword
    }
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(body), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      console.log(data)
      if(data) navigateToProfile()
      else alert('Wrong Email or Password')
    })
    .catch((error) => console.log(error))
  }

  return (
    <div className='login-container'>
        <div className="top"></div>
  <div className="bottom"></div>
    <div className="login">
      <div className='inputFields'>
      <header className="login-header">
        Log In
      </header>
      <label className='email'>
        <input type="text" name="emailField" placeholder='email' onChange={emailOnChange}/> 
      </label>
      <label className='password'>
        <input type="password" name="passwordField" placeholder='Password' onChange={inputPasswordOnChange}/> 
      </label>
      <button id='login-button' onClick={checkUser}> Log In</button>
      <div id='signupLink'>
        <Link to='/signup'> Need an account? Sign up! </Link>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Login;