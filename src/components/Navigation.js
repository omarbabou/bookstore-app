import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="nav-header">
    <h1 className="logo">Bookstore CMS</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/Categories">Categories</Link>
    </nav>
    <button className="icon-button" type="button">
      <i className="fa-solid fa-user" />
    </button>
  </header>
);

export default Navbar;
