import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and iOS mobile devices.</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>

      <div className="midFooter">
        <h1>iShopify</h1>
        <p>High quality is our first priority.</p>
        <p>Copyright 2022 &copy; AusafHussain. All rights reserved.</p>
      </div>
      <div className="rightFooter">
        <h4>Follow us</h4>
        <a href="https://www.instagram.com/iamausafhussain/">Instagram</a>
        <a href="https://iamausafhussain.netlify.app">Portfolio</a>
        <a href="https://www.linkedin.com/in/ausaf-hussain-4425b2195/">
          LinkedIn
        </a>
        <a href="https://github.com/iamausafhussain">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
