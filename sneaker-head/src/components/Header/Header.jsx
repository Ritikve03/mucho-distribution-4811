import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
// import Search from "./Search/Search";
import { Context } from "../../utils/Context";
import Cart from "../Cart/Cart";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className="header-content">
        <ul className="left">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CATEGORIES</li>
        </ul>
        <div className="center">SNEAKER-HEAD</div>
        {/* <div className="center">
          <img src="https://www.linkpicture.com/q/logo_36.jpg" alt="logo-img" />
        </div> */}
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span>
            <CgShoppingCart />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
