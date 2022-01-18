import classes from "./Navbar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "../MobileNavbar/MobileNavigation";
import "./../Navbar.css";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
