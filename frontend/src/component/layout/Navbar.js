import React from "react";
import "./Navbar.css";
import { Helmet } from "react-helmet";

function Navbar() {
  return (
    <div className="nav-container">
      <Helmet>
        <script src="./main.js" type="text/javascript" />
      </Helmet>
      <nav>
        <ul className="mobile-nav">
          <li>
            <div className="menu-icon-container">
              <div className="menu-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
            </div>
          </li>

          <li>
            <a href="#" className="link-logo"></a>
          </li>

          <li>
            <a href="" className="link-bag"></a>
          </li>
        </ul>

        <ul className="desktop-nav">
          <li>
            <a href="#" className="link-logo"></a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#" className="link-search"></a>
          </li>
          <li>
            <a href="#" className="link-bag"></a>
          </li>
        </ul>
      </nav>

      {/* <!-- End of navigation menu items --> */}

      <div className="search-container hide">
        <div className="link-search"></div>
        <div className="search-bar">
          <form action="">
            <input type="text" placeholder="Search apple.com" />
          </form>
        </div>
        <div className="link-close"></div>

        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Visiting an Apple Store FAQ</a>
            </li>
            <li>
              <a href="#">Shop Apple Store Online</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">AirPods</a>
            </li>
            <li>
              <a href="#">AirTag</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-search-container">
        <div className="link-search"></div>
        <div className="search-bar">
          <form action="">
            <input type="text" placeholder="Search apple.com" />
          </form>
        </div>
        <span className="cancel-btn">Cancel</span>

        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Visiting an Apple Store FAQ</a>
            </li>
            <li>
              <a href="#">Shop Apple Store Online</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">AirPods</a>
            </li>
            <li>
              <a href="#">AirTag</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
