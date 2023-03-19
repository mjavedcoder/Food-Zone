import React from "react";
import zoneImg from "../Container/zone5.jpg";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Zone</h1>
        <button>Cart</button>
      </header>
      <div className={classes["display-image"]}>
        <img src={zoneImg} alt="" />
      </div>
    </>
  );
}

export default Header;
