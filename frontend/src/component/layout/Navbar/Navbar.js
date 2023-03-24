import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

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
            <a href="/" className="link-logo"></a>
          </li>

          <li>
            {!user ? (
              <a href="/login" className="link-profile"></a>
            ) : (
              <a href="#"></a>
            )}
            {/* <a href="/cart" className="link-bag"></a> */}
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
            <a href="https://iamausafhussain.netlify.app" target="_blank">
              Contact
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Only on iShop</a>
          </li>
          <li>
            <a>Career</a>
          </li>
          <li>
            <a
              // href=""
              className="link-search"
              onClick={toggleSearchDesktop}
            ></a>
          </li>
          <li>
            <a href="/cart" className="link-bag">
              {cartItems.length == 0 ? null : (
                <span className="cartItemNotification">{cartItems.length}</span>
              )}
            </a>
          </li>
          <li>
            {!user ? <a href="/login" className="link-profile"></a> : <a></a>}
            {/* <a href="/login" className="link-profile"></a> */}
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
              <a>Visiting an iShop Store FAQ</a>
            </li>
            <li>
              <a>Shop Online</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
            <li>
              <a>AirPods</a>
            </li>
            <li>
              <a>AirTag</a>
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
              <a>Visiting an iShop Store FAQ</a>
            </li>
            <li>
              <a>Shop Online</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
            <li>
              <a>AirPods</a>
            </li>
            <li>
              <a>AirTag</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
