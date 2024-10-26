import React from "react";
import "./footerStyles.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="icon-bar">
        <div className="icon-content">
          <div className="payment-methods">
            <img src="visa.png" alt="Visa" className="payment-logo" />
            <img
              src="mastercard.png"
              alt="MasterCard"
              className="payment-logo"
            />
            <img
              src="american.png"
              alt="American Express"
              className="payment-logo"
            />
            <img src="skrill.png" alt="Skrill" className="payment-logo" />
            <div className="additional-icons">
              <img src="btcc.png" alt="Bitcoin" className="small-icon" />
              <img src="eth.png" alt="Ethereum" className="small-icon" />
              <img src="btc.png" alt="Bitcoin" className="small-icon" />
              <img src="/litecoin.png" alt="Discord" className="small-icon" />
            </div>
            <span>and 50+ more</span>
          </div>
        </div>
      </div>

      <div className="social-media-bar">
        <div className="social-media-content">
          <img src="/facebook.png" alt="Facebook" />
          <img src="/social.png" alt="Instagram" />
          <img src="/gorjeo.png" alt="Twitter" />
          <img src="/discordia.png" alt="Discord" />
        </div>
      </div>

      <div className="footer-content">
        <hr className="divider" />
        <div className="footer-bottom">
          <div className="company-info">
            <img
              src="/chicks-logo-large.svg"
              alt="Chicks Gold Logo"
              className="company-logo"
            />
            <p>support@chicksgold.com</p>
          </div>
          <div className="footer-links">
            <div className="column">
              <h4>Chicks Gold</h4>
              <ul>
                <li>
                  <span>Games</span>
                </li>
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Blog</span>
                </li>
                <li>
                  <span>Sitemap</span>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Support</h4>
              <ul>
                <li>
                  <span>Contact Us</span>
                </li>
                <li>
                  <span>FAQ</span>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <span>Privacy Policy</span>
                </li>
                <li>
                  <span>Terms of Service</span>
                </li>
                <li>
                  <span>Copyright Policy</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="trustpilot-reviews">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="/marcador.png"
                alt="TrustPilot Review Star"
              />
            ))}
            <span className="trustpilot-text">TrustPilot Reviews</span>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <p>© 2017 - 2020 Chicksgold.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
