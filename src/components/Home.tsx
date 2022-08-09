import React from 'react';
import '../styles/Home.css';
import { Link} from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <header className="home-header">
        Home
      </header>
      <Link to='/profile'>
        Profile
      </Link>
      <Link to='/'>
        Sign Out
      </Link>
    </div>
  );
}

export default Home;