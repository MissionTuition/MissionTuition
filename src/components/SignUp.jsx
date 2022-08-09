
import React from 'react';
import '../styles/SignUp.css';
import { Link} from 'react-router-dom';

function SignUp() {
  return (
    <div className="signUp">
      <header className="signUp-header">
        SignUp
      </header>
      <Link to='/login'>
        Have an account? Log in!
      </Link>
    </div>
  );
}

export default SignUp;
