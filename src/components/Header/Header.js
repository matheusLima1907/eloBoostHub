import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="navbar__links">
        <Link to="/login">Login/Signin</Link>
        <Link to="/league-of-legends">League of Legends</Link>
      </div>
    </header>
  );
}

export default Header;
