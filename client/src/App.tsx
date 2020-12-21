import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Components
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import AdvertisingSection from './components/AdvertisingSection';

const App = () => {
	return (
		<div className="app">
			<Nav />
			<section className="homepage-section">
				<HomePage />
			</section>
			<section className="advertising-section">
				<AdvertisingSection />
			</section>
			
		</div>
	);
}

export default App;
