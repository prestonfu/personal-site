import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './hamburger';
import NavData from '../data/navData';

const Navigation = () => (
  <header id="header">
    <h1 className="nav-name">
      {NavData.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="nav-link">
      <ul>
        {NavData.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;