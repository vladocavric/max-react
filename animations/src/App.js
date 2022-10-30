import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
    state = {
        modalIsOpen: false,
        divVisible : false
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    };
    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    };

    toggleDiv = () => {
        this.setState(prevState => {
                return {divVisible: !prevState.divVisible};
            }
        );
    };

    render() {
        return (
            <div className='App'>
                <h1>React Animations</h1>

                <Modal
                    showModal={this.state.modalIsOpen}
                    closed={this.closeModal} />
                {this.state.modalIsOpen && <Backdrop
                    showModal={this.state.modalIsOpen}
                    closed={this.closeModal} />}
                <button
                    onClick={this.toggleDiv}
                    className='Button'>Toggle
                </button>
                <br />
                <Transition
                    in={this.state.divVisible}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => console.log('onEnter')}
                    onEntering={() => console.log('onEntering')}
                    onEntered={() => console.log('onEntered')}
                    onExit={() => console.log('onExit')}
                    onExiting={() => console.log(('onExiting'))}
                    onExited={() => console.log('onExited')}
                >
                    {state =>
                        // <p>{state}</p>
                        <div
                            style={{
                                width     : 100,
                                height    : 100,
                                margin    : 'auto',
                                background: 'red',
                                transition: 'opacity 0.5s linear',
                                opacity   : state === 'entered' ? 1 : 0
                            }}></div>
                    }
                </Transition>


                <button
                    className='Button'
                    onClick={this.openModal}>Open Modal
                </button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
