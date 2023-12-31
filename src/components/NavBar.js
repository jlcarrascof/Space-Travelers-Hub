import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-planet.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="flex">
        <img src={logo} alt="Space Travellers Logo" className="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-menu">
        <li><NavLink to="/" activeclassname="active" className="nav-a">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeclassname="active" className="nav-a">Missions</NavLink></li>
        <li>
          <span className="line" />
          <NavLink exact to="/my-profile" activeclassname="active" className="nav-a">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
