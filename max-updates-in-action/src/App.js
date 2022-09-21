import React, { useCallback, useState } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';
import LazyDemo from './components/Demo/Demo.lazy';

function App() {
	console.log('App is running');
	const [showP, setShowP] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);
	const handleParagraphToggle = useCallback(() => {
		if (allowToggle) {
			setShowP((prevState) => !prevState);
		}
	}, [allowToggle]);
	const handleAllowToggle = useCallback(() => {
		setAllowToggle(true);
	}, []);
	return (
		<div className='app'>
			<h1>Hi there!</h1>
			{/* {showP ? <p>this is a paragraph that we are toggling</p> : <p></p>} */}
			<LazyDemo show={showP} />
			<Button onClick={handleAllowToggle}>Allow Toggle!</Button>
			<Button onClick={handleParagraphToggle}>Toggle Paragraph!</Button>
		</div>
	);
}

export default App;
