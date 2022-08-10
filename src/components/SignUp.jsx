import React, {useState} from 'react';
import '../styles/SignUp.scss';
import { Link, useNavigate } from 'react-router-dom';

const useInput = (initial) => {
  const [value, setValue] = useState(initial)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return [value, onChange];
}

function SignUp() {

  const [firstName, firstNameOnChange] = useInput('');
  const [lastName, lastNameOnChange] = useInput('');
  const [email, emailOnChange] = useInput('');
  const [password, passwordOnChange] = useInput('');

  const navigate = useNavigate()
  const navigateToProfile = () => {
    navigate('/Profile')
  }
  const createUser = () => {
    const body = {
      email,
      password,
      firstName,
      lastName
    }

    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then((data) => {
        console.log(data);
        if(data) navigateToProfile();
        else alert('Wrong Email or Password');
      })
      .catch((error) => console.log(error))
  }
  
  

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
          <input type="text" name="firstName" placeholder="First Name" onChange={firstNameOnChange}/>
        </label>
        <label className='lastTextField'>
          <input type="text" name="lastName" placeholder="Last Name" onChange={lastNameOnChange}/>
        </label>
        {/* <label className='userTextField'>
          <input type="text" name="userName" placeholder="Username"/>
        </label> */}
        <label className='emailTextField'>
          <input type="text" name="emailField" placeholder='Email'onChange={emailOnChange}/> 
        </label>
        <label className='passwordTextField'>
          <input type="password" name="passwordField" placeholder='Password'onChange={passwordOnChange}/> 
        </label>
        <button id='signUp-button' onClick={createUser}> Sign Up </button>
        <div id='logIn-link'>
          <Link to='/login'> Have an account? Log in! </Link>
        </div>
        </div>
        </div>
    </div>
  );
}

export default SignUp;
