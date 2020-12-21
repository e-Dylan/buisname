import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Components
import Nav from './components/Nav';
import HomePage from './components/HomePage';

const App = () => {
	return (
		<div className="app">
			<Nav />
			<HomePage />
		</div>
	);
}

export default App;
