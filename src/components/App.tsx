import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import Profile from "./Profile.tsx";

function App() {


  return (
    <div className="App">
      <header className="App-header">app</header>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>



    </div>
  );
}

export default App;
