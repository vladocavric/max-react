import React from 'react';
// import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit : 1000
};

const modal = (props) => {
    return (
        // <Transition
        //     in={props.showModal}
        //     timeout={animationTiming}
        //     mountOnEnter
        //     unmountOnExit>
        //     {state => {
        //         const cssClasses = `Modal ${state === 'entering'
        //             ? 'ModalOpened'
        //             : state === 'exiting' ? 'ModalClosed' : ''}`;
        //         return(
        //             <div className={cssClasses}>
        //                 <h1>A Modal</h1>
        //                 <button
        //                     className='Button'
        //                     onClick={props.closed}>
        //                     Dismiss
        //                 </button>
        //             </div>
        //         )
        //     }}
        // </Transition>
        <CSSTransition
            in={props.showModal}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            // classNames='fade'
            classNames={{
                enter: '',
                enterActive: 'ModalOpened',
                exit: '',
                exitActive: 'ModalClosed'
            }}
        >
            <div className='Modal'>
                <h1>A Modal</h1>
                <button
                    className='Button'
                    onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    );
};

export default modal;



