import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';

import './styles/AdvertisingSection.scss';

// Images/Icons
import launchImage from '../resources/advertising-section/launch-image.svg';

const AdvertisingSection = () => {
	return (
		<div className="container-center">
			<div className="section-title">
				<div className="section-title-text">THE PRODUCT</div>
				<div className="section-title-underline"></div>
			</div>

			<div className="advertising-container">
				<div className="image-col">
					<img className="launch-image" src={launchImage} />
				</div>
				<div className="text-col">
					<span className="title-text">Discover available domains by</span>
				</div>
			</div>
		</div>
	);
}

export default AdvertisingSection;
