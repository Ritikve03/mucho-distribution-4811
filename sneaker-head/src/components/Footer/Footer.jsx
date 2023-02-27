import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            "SNEAKER-HEAD" is a popular sneaker selling company that offers a
            vast collection of premium quality footwear for all ages. With a
            focus on comfort and style, their sneakers are designed to cater to
            the diverse tastes of customers and meet their expectations at
            affordable prices.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Sneaker-Head, Inc. Headquarters 330 West 34th Street New York, NY
              10001
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone :  (212) 720-3700</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@sneakerhead.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Men's</span>
          <span className="text">Women's</span>
          <span className="text">Kid's</span>
          <span className="text">Accessories</span>
          <span className="text">Clothings</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            © 2023 sneaker-head.com, Inc. All Rights Reserved
          </span>
          <img
            className="imag"
            src="https://www.kindpng.com/picc/m/44-440249_paypal-payment-methods-icons-hd-png-download.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
