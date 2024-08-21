import React from 'react';
import '../styles/header.css';

function Header() {
    return (
      <div className="header">
        <img src="Logo.png" alt="Logo" />
        <h1>Simple <span>Arithmetic</span> Calculator</h1>
      </div>
    );
}

export default Header;
