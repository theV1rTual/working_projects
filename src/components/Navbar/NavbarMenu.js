// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import classes from './Navbar.module.css'
// import "./../Navbar.css";

// const NavbarMenu = (props) => {
//   return (
//     <nav>
//       <ul className={classes.list}>
//         <li onClick={() => props.isMobile && props.closeMobileMenu()} >
//           <NavLink to="/scm-intro">SCM</NavLink> 
//         </li>
//         <li onClick={() => props.isMobile && props.closeMobileMenu()}>
//           <NavLink to="/mfg-intro">MFG</NavLink> 
//         </li>
//         <li onClick={() => props.isMobile && props.closeMobileMenu()}>
//           <NavLink to="/eng-intro">ENG</NavLink>  
//         </li>
//         <li onClick={() => props.isMobile && props.closeMobileMenu()}>
//           <NavLink to="/sga-intro">SGA</NavLink>  
//         </li>
//         <li onClick={() => props.isMobile && props.closeMobileMenu()}>
//           <NavLink to="/sga-intro">EQS</NavLink>  
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavbarMenu;

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ModulesData } from "../ModulesData";
import { ReactComponent as CubeIcon } from "./../icons/cube-logo.svg";

export default function Navbar() {
  const [isDrpdwnHovered, setIsDrpdwnHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [targetEl, setTargetEl] = useState();
  const [menuColor, setMenuColor] = useState('rgba(0, 48, 73, 0.08)');

  const onMouseOver = (e, color) => {
    const el = e.target;
    if (targetEl !== undefined) targetEl.style.backgroundColor = "rgba(0, 48, 73, 0.08)";
    setTargetEl(el);
    setMenuColor(color);
    el.style.backgroundColor = color;
  };

    useEffect(() => {
      if (targetEl !== undefined) {
        if(isDrpdwnHovered) 
          {targetEl.style.backgroundColor = menuColor;}
        else  
          {targetEl.style.backgroundColor = "rgba(0, 48, 73, 0.08)";}
  }
 }, [isDrpdwnHovered, targetEl, menuColor]) 

 
  return (
    <div className="nav-links left">
      <ul>
        {ModulesData.map((item, index) => {
            return (
              <li key={item.title} className="nav-item skewed">
                <Link
                  to={item.path}
                  onMouseEnter={(e) => {
                    onMouseOver(e, item.color);
                    setIsMenuOpen(true);
                    setIsDrpdwnHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsDrpdwnHovered(false);  }}
                  
                    style={(index === 0)? {padding: "9px 5px 0 0"} : {}}
                >
                  {" "}
               <span className="non-skew">
                 {(index === 0) ? <CubeIcon /> : item.title}
              </span> 

               </Link>
               <div
                  className="dropdown"
                  style={
                    isMenuOpen
                      ? { borderColor: item.color, left: "16%"}
                      : { opacity: "0", pointerEvents: "none" }
                  }
                  onMouseEnter={(e) => {
                    setIsDrpdwnHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsDrpdwnHovered(false);
                    targetEl.style.backgroundColor = "rgba(0, 48, 73, 0.08)"
                  }}
                >
                  <ul>
                    {item.submodule.map((subm) => {
                      return (
                        <li
                          key={subm.path}
                          className="dropdown-item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Link
                            to={(subm.description === "TBD")? "under-construction" : subm.path}
                            style={(subm.description === "TBD")? {fontWeight: "normal"} : {}}
                             onMouseEnter={(e) => {
                              if (index === 0) {e.target.style.color = "#fff"}
                              e.target.style.backgroundColor = item.color;
                             }}
                             onMouseLeave={(e) => {
                              if (index === 0) {e.target.style.color = "#00141F"; 
                              e.target.style.fontWeight = (subm.description === "TBD")? "normal" : "bold"}
                              e.target.style.backgroundColor = "#fff" ;
                             }}
                          >
                            {" "}
                            {subm.title}
                          </Link>
                          <div className="dropdown second" 
                          style={
                            isMenuOpen
                              ? { borderColor: item.color}
                              : { opacity: "0", pointerEvents: "none" }
                          } >
                              <ul>
                                <li className="dropdown-item desc" >
                                  { (subm.description === "TBD")?
                                  <p> This area is still under construction! 
                                  Please come back at a later time or 
                                  {" "}<Link to="contact-us">Contact Us</Link>{" "}
                                  so we can notify you when this becomes available.
                                  </p>
                                  : subm.description
                                  }
                                </li>
                              </ul>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

              </li>
              
            );
        })}
      </ul>
    </div>
  );
}





