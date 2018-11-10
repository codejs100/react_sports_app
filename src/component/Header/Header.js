import React from "react";
import { Link } from "react-router-dom";

import FONTAWESOME from "react-fontawesome";
import style from "./Header.module.css";

import SideNav from "./Sidenav/Sidenav";

const Header = props => {
  const navBar = () => (
    <div className={style.bars}>
      <FONTAWESOME
        name="bars"
        style={{
          color: "#dfdfdf",
          padding: "10px",
          cursor: "pointer"
        }}
        onClick={props.onOpenNav}
      />
    </div>
  );

  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img src="/images/nba_logo.png" alt="NBA logo" />
      </Link>
    );
  };

  return (
    <header className={style.header}>
      <SideNav {...props} />
      <div className={style.headerOption}>
        {navBar()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
