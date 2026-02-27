// Updated Header.js to use react-router-dom Link for navigation
import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'; // Import Link
import "./Header.css";
import logo from "../assets/images/favicon.png";


const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScroll = React.useRef(0);

  const controlNavbar = useCallback(() => {
    const y = window.scrollY || window.pageYOffset;
    if (y <= 0) {
      setAtTop(true);
      setShowNav(true);
    } else {
      setAtTop(false);
      if (y > lastScroll.current) setShowNav(false); // scrolling down
      else setShowNav(true); // scrolling up
    }
    lastScroll.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="site-header">
      {/* Navbar is transparent only if at top AND on home page. Else solid. */}
      <nav className={`navbar ${atTop && isHome ? "transparent" : "solid"} ${showNav ? "show" : "hide"}`} role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <Link to="/completed">Completed</Link> {/* Keep as anchor if section on page */}
          <Link to="#ongoing">On Going</Link>
          <Link to="#services">Services</Link>
        </div>

        <div className="nav-center">
          <Link to="/" className="brand" aria-label="Home">
            <img src={logo} alt="Vogue Steel logo" className="logo" />
          </Link>
        </div>

        <div className="nav-right">
          <Link to="#home">Home</Link> {/* If #home is a section, keep; else change */}
          <Link to="/about">About</Link> {/* Changed to /about for separate page */}
          <Link to="/contact">Contact</Link>
          <button className="download-btn">Download PDQ</button>
        </div>
      </nav>

      {/* Gallery removed from Header to fix stacking context */}
    </header>
  );
};

export default Header;