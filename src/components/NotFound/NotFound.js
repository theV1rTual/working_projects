import React from "react";
import classes from './NotFound.module.css';

export default function NotFound() {
    return(
        <div className={classes.main_block}>
            {/* <h1>404 page not found!</h1> */}
            <h1 className={classes.title}>404</h1>
            <p className={classes.not_found}>Page not found</p>
            <p className={classes.description}>The resourse requested could not be found on this server</p>
        </div>
    );
}