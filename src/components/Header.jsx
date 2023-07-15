import React from 'react'
import "../styles/Header.css";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <nav>
      <h1>techystar.</h1>
        <div>
            <HashLink to={'/#home'}>Home</HashLink>
            <HashLink to={'/#about'}>About</HashLink>
            <HashLink to={'/#brands'}>Brands</HashLink>
            <Link to={'/services'}>Services</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    </nav>
  )
}

export default Header