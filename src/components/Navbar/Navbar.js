import classes from './Navbar.module.css';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import { NavLink } from 'react-router-dom';
import './../Navbar.css'
import { Link } from 'react-router-dom';

import { ReactComponent as ManexIcon } from "./../icons/manex-logo.svg";
import { ReactComponent as LoginIcon } from "./../icons/login.svg";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>

      {/* <div className={classes.logo}>
        <NavLink to="/">
          <ManexIcon />
        </NavLink>
      </div>       */}

      <Navigation />
      <MobileNavigation />
    </div>
  ); 
}

export default Navbar;

// import "./../Navbar.css";
// import NavbarMenu from "./NavbarMenu";
// import { ReactComponent as ManexIcon } from "./../icons/manex-logo.svg";
// import { ReactComponent as LoginIcon } from "./../icons/login.svg";
// import { ReactComponent as Burger } from './../icons/burger.svg';
// import { Link } from "react-router-dom";

// export default function Navbar() {
 
//   return (
//     <header>
//       <div className="navbar-container">

//         <div className="nav-links logo">
//           <ul>
//             <li className="nav-item logo">
//               <Link to="/" >
//                 <ManexIcon  />
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <NavbarMenu />

//         <div className="nav-links right">
//           <ul>
//             <li className="nav-item" >
//               <Link to="about-us" style={{paddingTop: "2px"}} > About Us </Link>
//             </li>
//             <li className="nav-item" >
//               <Link to="contact-us" style={{paddingTop: "2px"}}> Contact Us </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="#"> <LoginIcon/> </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="burger-menu"> 
//           <Burger />
//         </div>



//       </div>
//     </header>
//   );
// }
