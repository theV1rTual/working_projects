import { useHistory } from 'react-router';
import classes from './ContactUs.module.css'
import { ReactComponent as MsgSentIcon } from './../icons/msg-sent.svg'

const CompleteMessage = () => {
    const history = useHistory();
    function clickHandler() {
        history.push("/");
    }
    return(
        <div className={classes.contact_container}>
            <div className={classes.msg_sent}>
              <div className={classes.msg_icon}> <MsgSentIcon/> </div>
              <p>
                Thank you for your interest in <span style={{color: "red"}}> manex </span>!
                <br/>
                Your information is forwarded <br/>
                 to our sales team.
                <br/>
                We will respond to <br/>
                your inquiry promptly!
              </p>
              <button className={classes.backHome} onClick={clickHandler}>Back to home</button>
            </div>
        </div>
    );
}

export default CompleteMessage;