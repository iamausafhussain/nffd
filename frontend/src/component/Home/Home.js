import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Welcome to iShopify</p>
        <h1>Find amazing products below.</h1>
        <a href="#container">
          <button>
            <MouseIcon />
          </button>
        </a>
      </div>
    </>
  );
};

export default Home;
