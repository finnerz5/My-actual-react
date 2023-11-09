import "./NaviBar.css";
import { Link, Outlet } from "react-router-dom";
import {
  ABOUT_PATH,
  FEEDBACK_PATH,
  HELP_PATH,
  INDEX_PATH,
  NEWS_PATH,
} from "../Constants/paths";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function Navbar() {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <nav ref={navRef}>
          <Link to={INDEX_PATH}>Home</Link>
          <Link to={NEWS_PATH}>News</Link>
          <Link to={ABOUT_PATH}>About</Link>
          <Link to={HELP_PATH}>Help</Link>
          <Link to={FEEDBACK_PATH}>Feedback</Link>
          <button
            type="button"
            className="nav-btn nav-close-btn "
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button type="button" className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
