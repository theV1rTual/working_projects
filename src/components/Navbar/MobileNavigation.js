import NavbarMenu from "./NavbarMenu";
import classes from './Navbar.module.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState } from "react";
import MobileNavbarMenu from "./MobileNavbarMenu";
import { ReactComponent as ManexIcon } from "./../icons/manex-logo.svg";


const MobileNavigation = () => {

    const [open, setOpen] = useState(false) // opening the first mobile navigation
    const [secondOpen, setSecondOpen] = useState(false) // opening the first mobile navigation

    const hamburgerIcon = <AiOutlineMenu className={classes.Hamburger} size='40px' color='black' onClick={() => setOpen(!open)} />
    const closeIcon = <AiOutlineCloseCircle className={classes.Hamburger} size='40px' color='black' onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false);

    return (
        <div className={classes.MobileNavigation}>
            <span className={classes.ManexIcon}>
                <ManexIcon />
            </span>
            {/* <hamburgerIcon /> */}
            {hamburgerIcon}
            {/* {open ? closeIcon : hamburgerIcon} */}
            <div>
                {open && <MobileNavbarMenu isMobile={true} closeMobileMenu={closeMobileMenu} />}
            </div>
        </div>
    );
}

export default MobileNavigation;