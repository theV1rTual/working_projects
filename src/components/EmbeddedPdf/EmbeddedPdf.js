import React, { useState } from "react";

import classes from './EmbeddedPdf.module.css'

export default function EmbeddedPdf({pdf_url, title}) {

    const[isLoading, setIsLoading] = useState(true);

    const hideLoader = () => {
      setIsLoading(false)
    };

  return (
    <>
   { isLoading?
    <div className={classes.loader}>
        {/* <div className="dot orange"></div> */}
        {/* <div className="dot blue"></div> */}
        <div className={`${classes.dot} ${classes.orange}`}></div>
        <div className={`${classes.dot} ${classes.blue}`}></div>
     </div>
    : null}
    <iframe
      title={title}
      src={pdf_url}
      width="100%"
      height="100%"
      frameBorder="0"
      sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts"
      onLoad={hideLoader}
      allowFullScreen
    >
      Seems like your browser does not support PDF preview.You can download the
      PDF
      <a href={pdf_url}> here</a> instead.
    </iframe>
  
  </>
  );
}
