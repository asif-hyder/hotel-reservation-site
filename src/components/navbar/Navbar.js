import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets";
import { FaAlignRight } from "react-icons/fa";
import { navbarItem } from "../../data/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__center">
        <div className="nav__header">
          <Link to="/">
            <img src={images.logo} alt="logo img" />
          </Link>
          <button
            className="nav__header-btn"
            type="button"
            onClick={() => setToggle(!toggle)}
          >
            <FaAlignRight className="nav__header-btn-icon" />
          </button>
        </div>
        <ul className={toggle ? "nav__links show-nav" : "nav__links"}>
            {
                navbarItem.map(({id, path, title}) => (
                    <li key={id}>
                        <Link to={path} >{title}</Link>
                    </li>
                ))
            }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
