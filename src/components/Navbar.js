import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Debasish Mandal</h1>
      <div className="menue">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/project">Projects</a>
        <a href="/education">Education</a>
      </div>
    </nav>
  );
};


export default Navbar;