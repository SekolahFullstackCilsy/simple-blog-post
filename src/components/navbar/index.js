import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h2><NavLink to="/">Home</NavLink></h2>
      <h2><NavLink to="/blog">Blog</NavLink></h2>
    </nav>
  )
}