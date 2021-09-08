import NavbarMenu from "./NavbarMenu";
import classes from './Navbar.module.css';
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
            {/* <ManexIcon />
            <NavbarMenu /> */}

            <NavbarMenu />

            <div className="nav-links right">
                <ul>
                    <li className="nav-item" >
                        <Link to="about-us" style={{paddingTop: "2px"}} > About Us </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="contact-us" style={{paddingTop: "2px"}}> Contact Us </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#"> <LoginIcon/> </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;

// export default function Navbar() {
//   const [isDrpdwnHovered, setIsDrpdwnHovered] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const [targetEl, setTargetEl] = useState();
//   const [menuColor, setMenuColor] = useState('rgba(0, 48, 73, 0.08)');

//   const onMouseOver = (e, color) => {
//     const el = e.target;
//     if (targetEl !== undefined) targetEl.style.backgroundColor = "rgba(0, 48, 73, 0.08)";
//     setTargetEl(el);
//     setMenuColor(color);
//     el.style.backgroundColor = color;
//   };

//     useEffect(() => {
//       if (targetEl !== undefined) {
//         if(isDrpdwnHovered) 
//           {targetEl.style.backgroundColor = menuColor;}
//         else  
//           {targetEl.style.backgroundColor = "rgba(0, 48, 73, 0.08)";}
//   }
//  }, [isDrpdwnHovered, targetEl, menuColor]) 

 
//   return (
//     <div className="nav-links left">
//       <ul>
//         {ModulesData.map((item, index) => {
//             return (
//               <li key={item.title} className="nav-item skewed">
//                 <Link
//                   to={item.path}
//                   onMouseEnter={(e) => {
//                     onMouseOver(e, item.color);
//                     setIsMenuOpen(true);
//                     setIsDrpdwnHovered(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsDrpdwnHovered(false);  }}
                  
//                     style={(index === 0)? {padding: "9px 5px 0 0"} : {}}
//                 >
//                   {" "}
//                <span className="non-skew">
//                  {(index === 0) ? <CubeIcon /> : item.title}
//               </span> 

//                </Link>
//                <div
//                   className="dropdown"
//                   style={
//                     isMenuOpen
//                       ? { borderColor: item.color, left: "16%"}
//                       : { opacity: "0", pointerEvents: "none" }
//                   }
//                   onMouseEnter={(e) => {
//                     setIsDrpdwnHovered(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsDrpdwnHovered(false);
//                     targetEl.style.backgroundColor = "rgba(0, 48, 73, 0.08)"
//                   }}
//                 >
//                   <ul>
//                     {item.submodule.map((subm) => {
//                       return (
//                         <li
//                           key={subm.path}
//                           className="dropdown-item"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           <Link
//                             to={(subm.description === "TBD")? "under-construction" : subm.path}
//                             style={(subm.description === "TBD")? {fontWeight: "normal"} : {}}
//                              onMouseEnter={(e) => {
//                               if (index === 0) {e.target.style.color = "#fff"}
//                               e.target.style.backgroundColor = item.color;
//                              }}
//                              onMouseLeave={(e) => {
//                               if (index === 0) {e.target.style.color = "#00141F"; 
//                               e.target.style.fontWeight = (subm.description === "TBD")? "normal" : "bold"}
//                               e.target.style.backgroundColor = "#fff" ;
//                              }}
//                           >
//                             {" "}
//                             {subm.title}
//                           </Link>
//                           <div className="dropdown second" 
//                           style={
//                             isMenuOpen
//                               ? { borderColor: item.color}
//                               : { opacity: "0", pointerEvents: "none" }
//                           } >
//                               <ul>
//                                 <li className="dropdown-item desc" >
//                                   { (subm.description === "TBD")?
//                                   <p> This area is still under construction! 
//                                   Please come back at a later time or 
//                                   {" "}<Link to="contact-us">Contact Us</Link>{" "}
//                                   so we can notify you when this becomes available.
//                                   </p>
//                                   : subm.description
//                                   }
//                                 </li>
//                               </ul>
//                           </div>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>

//               </li>
              
//             );
//         })}
//       </ul>
//     </div>
//   );
// }
