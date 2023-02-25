import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>"Sneakerheads don't chase trends, we set them.".</p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src= "https://www.linkpicture.com/q/logo_36.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
