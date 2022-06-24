import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  // Desktop Version

  const toggleSearchDesktop = (e) => {
    const desktopNav = document.querySelector(".desktop-nav");
    const searchContainer = document.querySelector(".search-container");
    const overlay = document.querySelector(".overlay");

    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
  };

  const toggleCloseDesktop = () => {
    const desktopNav = document.querySelector(".desktop-nav");
    const searchContainer = document.querySelector(".search-container");
    const overlay = document.querySelector(".overlay");

    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
  };

  // Mobile Version

  const toggleMenuIcon = () => {
    const navContainer = document.querySelector(".nav-container");
    navContainer.classList.toggle("active");
  };

  const toggleMobileSearch = () => {
    const searchBar = document.querySelector(
      ".mobile-search-container .search-bar"
    );
    const nav = document.querySelector(".nav-container nav");
    const desktopNav = document.querySelector(".desktop-nav");
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
  };

  const cancelSearch = () => {
    const searchBar = document.querySelector(
      ".mobile-search-container .search-bar"
    );
    const nav = document.querySelector(".nav-container nav");
    const desktopNav = document.querySelector(".desktop-nav");

    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
  };

  return (
    <div className="nav-container">
      <nav>
        <ul className="mobile-nav">
          <li>
            <div className="menu-icon-container" onClick={toggleMenuIcon}>
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
            <a href="/" className="link-logo"></a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Only on iShop</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a
              // href=""
              className="link-search"
              onClick={toggleSearchDesktop}
            ></a>
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
            <input type="text" placeholder="Search iShop" />
          </form>
        </div>
        <div className="link-close" onClick={toggleCloseDesktop}></div>

        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Visiting an iShop Store FAQ</a>
            </li>
            <li>
              <a href="#">Shop Online</a>
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
        <div className="search-bar" onClick={toggleMobileSearch}>
          <form action="">
            <input type="text" placeholder="Search iShop" />
          </form>
        </div>
        <span className="cancel-btn" onClick={cancelSearch}>
          Cancel
        </span>

        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Visiting an iShop Store FAQ</a>
            </li>
            <li>
              <a href="#">Shop Online</a>
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
