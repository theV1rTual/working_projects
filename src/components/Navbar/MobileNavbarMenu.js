import react from "react";
import { Link, NavLink } from "react-router-dom";
import classes from './Navbar.module.css';
import { ReactComponent as ManexIcon } from "./../icons/manex-logo.svg";

const MobileNavbarMenu = () => {
    // const CubeArray = [
    //     {name: 'Lean Manufactoring', path: '/lean-manufacturing' },
    //     {name: 'CUBE Part Number System', path: '/ems-part-number-system'},
    //     {name: 'Material Tracking & Control (MTC/MSL)', path: '/mtc'},
    //     {name: 'Dynamic Production Scheduling & Tracking', path: '/dynamic-production-scheduling'},
    //     {name: 'CUBE ERP or MES Implementation Roadmap', path: '/cube-erp-or-mes-implementation-roadmap'},
    //     {name: 'CUBE Implementation, Training & Consultancy', path: '/cube-implementation-training-and-consultancy'},
    //     {name: 'ERP & MES Selection Process', path: '/erp-and-mes-selection-process'},
    //     {name: 'CUBE System Value Proposition', path: '/erp-and-mes-value-proposition'},
    //     {name: 'CUBE SaaS License Terms & Conditions', path: '/CUBE-SaaS-License-Terms-and-Conditions' }
    // ]

    return (
        <div className={classes.mobileNavbar}>
            <ul className={classes.mobileList}>
                <li className={classes.mobileListItem}>
                    <NavLink className={classes.mobileLink1} to="/">Cube</NavLink>
                </li>
                <hr className={classes.line} />
                <li className={classes.mobileListItem}>
                    <NavLink className={classes.mobileLink1} to="/">Cube</NavLink>
                </li>
                <hr className={classes.line}  />
                <li className={classes.mobileListItem}>
                    <NavLink className={classes.mobileLink1} to="/">Cube</NavLink>
                </li>
                <hr className={classes.line} />
                <li className={classes.mobileListItem}>
                    <NavLink className={classes.mobileLink1} to="/">Cube</NavLink>
                </li>
                <hr className={classes.line}/>
                <li className={classes.mobileListItem}>
                    <NavLink className={classes.mobileLink1} to="/">EQS</NavLink>
                </li>
                <hr className={classes.line}/>
                <li className={classes.mobileListItem}>
                    <NavLink className={classes.mobileLink1} to="/scm-intro">SQA</NavLink>
                </li>


                <li>
                    About Us
                </li>
                <li>
                    Contact Us
                </li>
            </ul>
        </div>  
    );
}

export default MobileNavbarMenu;