import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <div className="right">
        <h1>VideoPlayer</h1>
      </div>
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/playlist">Playlist</Link>
      </div>
    </nav>
  );
};

export default Navbar;
