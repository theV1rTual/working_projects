import NavbarMenu from "./NavbarMenu";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ReactComponent as ManexIcon } from "./../icons/manex-logo.svg";

import { ReactComponent as LoginIcon } from "./../icons/login.svg";

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.logo}>
        <NavLink to="/">
          <ManexIcon />
        </NavLink>
      </div>
      <NavbarMenu />
      <div className="nav-links right">
        <ul>
          <li className={classes.list_nav_item}>
            <Link
              className={classes.nav_item}
              to="about-us"
              style={{ paddingTop: "2px" }}
            >
              {" "}
              About Us{" "}
            </Link>
          </li>
          <li className={classes.list_nav_item}>
            <Link
              className={classes.nav_item}
              to="contact-us"
              style={{ paddingTop: "2px" }}
            >
              {" "}
              Contact Us{" "}
            </Link>
          </li>
          <li className={classes.list_nav_item}>
            <Link className={classes.nav_item} to="#">
              {" "}
              <LoginIcon />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
