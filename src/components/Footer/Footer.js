import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const startYear = 2021;

  return (
    <footer id="footer">
      <div className={classes.footer_left}>
        MANEX ERP INC. © {startYear}
        {currentYear > startYear ? " - " + currentYear : ""}
      </div>
      <div className={classes.footer_right}>
        <Link to="/terms-of-use">TERMS OF USE</Link>
        <Link to="/privacy-policy">PRIVACY POLICY</Link>
      </div>
    </footer>
  );
}
