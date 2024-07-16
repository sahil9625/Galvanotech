import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/logo2.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <motion.h1
        className="navbar-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link to="/">
          <img width="80%" src={logo} alt="Galvanotech" />
        </Link>
      </motion.h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <Link className="navbar-links" to={"/Products"}>
            Products
          </Link>
        </li>
        <li>
          <Link className="navbar-links" to={"/About"}>
            About
          </Link>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Team
          </a>
        </li>
       
        <li>
          <Link className="navbar-links" to={"/WorldMap"}>
            Map
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <motion.div
          onClick={openNav}
          className="mobile-navbar-close"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <FontAwesomeIcon icon={faTimes} className="hamb-icon" />
        </motion.div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <Link onClick={openNav} to={"/Products"}>
              Products
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to={"/About"}>
              About
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Team
            </a>
          </li>
          <li>
            <Link onClick={openNav} to={"/PartnersPage"}>
              Associates
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to={"/WorldMap"}>
              Map
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <motion.div
        className="mobile-nav"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon" />
      </motion.div>
    </div>
  );
}

export default Navbar;
