import classes from "./../Navbar/Navbar.module.css";
import { state } from "../store/state";
import { useHistory } from "react-router";
import { AiOutlineLeft } from "react-icons/ai";
import React, {useState} from 'react';
import './style.css'

const CUBEList = ({list, onClose, onRedirect}) => {
  let history = useHistory(); 
  const closeIcon = <AiOutlineLeft size='20px' color='black' onClick={onClose} />

  return (
    <div>
        <span id={classes.closeIcon}>{closeIcon}</span>
        <ul className={classes.secondMobileNavigation} onClick={onRedirect}>
          {list.map((item, index) => (
            <li onClick={() => history.push(item.path)} className={classes.cubeListItem} key={index}>{item.title}</li>
          ))}
        </ul> 
    </div>
  );
};

const MobileNavbarMenu = (props) => {
  const leftIcon = <AiOutlineLeft className={classes.iconLeft} size='20px' color='black'/>
  const {open} = props
  const [isOpen, setIsOpen] = useState(false);
  const [moduleList, setModuleList] = useState([]);

  const moduleClick = (list) => {
    setIsOpen(true);
    setModuleList(list);
  };

  const linkClick = () => {
    setIsOpen(false);
    props.closeMobileMenu()
  }

  let history = useHistory();

  const downLinkClick = (path) => {
    history.push(path)
    setIsOpen(false);
    props.closeMobileMenu()
  }

  return (
    <div className={`module-list ${open ? "open" : ""}`}  > 
      
      {isOpen && <CUBEList list={moduleList} onClose={()=>{
        setIsOpen(false)
      }} openMobileMenu={props.openMobileMenu} onRedirect={()=>{
        linkClick()
      }}/>}

      {!isOpen && (
        <ul className={classes.mobileList} >
        {state.map((module, index) => (
          <>
            <li key={index}
              className={classes.mobileListItem}
              onClick={() => moduleClick(module.list)}
            >
              <span>{leftIcon}</span>
              <span className={classes.name}>{module.name}</span>
            </li>
            <hr className={classes.line} />
          </>
        ))}
          
          <li className={classes.aboutUsMobileLink} onClick={() => downLinkClick('/about-us') }>About Us</li>
          <li className={classes.contactUsMobileLink} onClick={() => downLinkClick('/contact-us') }>Contact Us</li>
      </ul>
      )}

   
    </div>
  );
};

export default MobileNavbarMenu;
