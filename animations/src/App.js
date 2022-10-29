import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
	state = {
		modalIsOpen: false,
	};

	closeModal = () => {
		this.setState({
			modalIsOpen: false,
		});
	};
	openModal = () => {
		this.setState({
			modalIsOpen: true,
		});
	};
	render() {
		return (
			<div className='App'>
				<h1>React Animations</h1>
				<Modal showModal={this.state.modalIsOpen} closed={this.closeModal}/>
				<Backdrop showModal={this.state.modalIsOpen} closed={this.closeModal} />
				<button className='Button' onClick={this.openModal}>Open Modal</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
