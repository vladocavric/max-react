import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = `Backdrop ${props.showModal ? 'BackdropOpened' : 'BackdropClosed'}`
    return <div className={cssClasses} onClick={props.closed}></div>

}


export default backdrop;