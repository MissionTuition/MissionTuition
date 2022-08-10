import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import SignUp from './components/SignUp';
import LogIn from './components/LogIn.tsx';
import Home from './components/Home.tsx';
import Profile from './components/Profile.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileContainer from './components/ProfileContainer.tsx';

// import { BrowserRouter, Routes, Route, } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
         <Routes>
        <Route path="/" element={<LogIn />} />   
        <Route path="/signup" element={<SignUp />} />  
        <Route path="/home" element={<Home />} />  
        <Route path="/profile" element={<Profile />} />  
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

