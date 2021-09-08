import { useHistory } from "react-router";
import logo from './../icons/error.svg';
import classes from './ContactUs.module.css'

const ErrorMessage = () => {
    
    const history = useHistory();
    
    function clickHandler() {
        history.push("/")
    }

    return(
        <div className={classes.contact_container}>
            <div className={classes.msg_sent}>
              <div className={classes.msg_icon}> 
                <img className={classes.error_img} src={logo} alt="error"/>
              </div>
              <p>
                Something went wrong!
                <br/>
                Please, try again later or email us to <a href="mailto:sales@manex.com">sales@manex.com</a>
                <br/>
              </p>
              <button className={`${classes.backHome} ${classes.error_page_button}`} onClick={clickHandler}>Back to home</button>
            </div>
        </div>
    );
}

export default ErrorMessage;