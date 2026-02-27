import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";



const Footer = ({
  logos = [],
  speed = 20,
  logoWidth = 160,
  partnerData = [] // Array of objects with { name, description, logo }
}) => {
  return (
    <footer className="footer">

      {/* COMPANY INFO */}
      <div className="footer-info">
        <div className="info-block">
          <h4>Complete Project</h4>
          <p>Engineering Solution</p>
          <p>United Arab Emirates</p>
        </div>

        <div className="info-block">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Linkedin"><FaLinkedin /></a>
          </div>
        </div>

        <div className="info-block">
          <h4>Location</h4>
          <p>Sharjah Industrial Area # 15</p>
          <p>P.O. Box 33736, Sharjah - UAE</p>
        </div>

        <div className="info-block">
          <h4>Contact Info</h4>
          <p>+971 6 5262843</p>
          <p>info@vogue-steel.com</p>
        </div>
      </div>

      <div className="footer-copy">
        <p>&copy; 2024 Vogue Steel Factory LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;