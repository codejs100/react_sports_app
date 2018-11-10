import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

import { CURRENT_YEAR } from "./../../config";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Link to="/" className={style.logo}>
        <img src="/images/nba_logo.png" alt="NBA logo" />
      </Link>
      <div className={style.right}>
        @NBA {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
