import React from 'react';
import '../../styles/Navbar.scss';

function Navbar() {
  return (
    <div id="navbar">
      <div className="container">
        <div className="nav-inner">
          <a href="/" id="nav-logo">AirConf</a>
          <div id="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="https://github.com/rzthdev" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="menu-item">
                <a href="mailto:rizaltoha45@gmail.com" target="_blank" rel="noreferrer">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;