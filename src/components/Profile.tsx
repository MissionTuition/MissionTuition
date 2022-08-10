import React from 'react';
import '../styles/Profile.css';
import { Link} from 'react-router-dom';

function Profile() {
  return (
    <div className="profile">
      <header className="profile-header">
        Profile
      </header>
      <Link to='/home'>
        feed
      </Link>
      <Link to='/'>
        Sign Out
      </Link>
    </div>
  );
}

export default Profile;