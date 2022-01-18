import classes from "./../Navbar/Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MobileNavbarMenu from "./MobileNavbarMenu";
import { ReactComponent as ManexIcon } from "./../icons/manex-logo.svg";
import { useHistory } from "react-router";
import { event } from "react-ga";
import { useMousePosition } from "./useMousePosition";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false); // opening the first mobile navigation

  const hamburgerIcon = (
    <AiOutlineMenu
      className={classes.Hamburger}
      size="30px"
      color="black"
      onClick={() => hamburgerClickHandler()}
    />
  );

  let hamburgerClickHandler = () => {
    setOpen(!open);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };
  const openMobileMenu = () => {
    setOpen(true);
  };

  let history = useHistory();

  let ManexClickHandler = () => {
    history.push("/");
    setOpen(false);
  };

  const position = useMousePosition();

  return (
    <div className={classes.MobileNavigation}>
      <span
        className={classes.ManexIcon}
        onClick={() => ManexClickHandler(event)}
      >
        <ManexIcon />
      </span>
      {hamburgerIcon}
      <div>
        {open === true && position.x <= 137 && setOpen(false)}

        <MobileNavbarMenu
          isMobile={true}
          closeMobileMenu={closeMobileMenu}
          openMobileMenu={openMobileMenu}
          open={open}
        />
      </div>
    </div>
  );
};

export default MobileNavigation;
