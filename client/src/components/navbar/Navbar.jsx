import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import UserMenu from "../userMenu/UserMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search");
  };
  return (
    <div className="navContainer">
      <div className="logo">
        <Link className="link" to="/">
          <FontAwesomeIcon icon={faHouse} className="fIcon" />
        </Link>
      </div>

      <div className="menu">
        <Link to="/?cat=programming" className="link">
          Programming
        </Link>
        <Link to="/?cat=hacking" className="link">
          Hacking
        </Link>
        <Link to="/?cat=networking" className="link">
          Networking
        </Link>
        <Link to="/?cat=cybersecurity" className="link">
          Security
        </Link>

        <div className="search">
          <FontAwesomeIcon
            icon={faSearch}
            className="menuIcon"
            onClick={() => {
              handleSearch();
            }}
          />
        </div>

        <div className="userLogo">
          <UserMenu className="link" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
