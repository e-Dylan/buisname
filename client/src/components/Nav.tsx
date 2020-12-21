import React from "react";
import './styles/Nav.scss';

const Nav = () => {
	return (
		<div className="nav-container">
			<div className="nav-items">
				<div className="nav-left">
					<a className="nav-logo"><span className="logo-1">buis</span><span className="logo-2">name</span></a>
				</div>
				<div className="nav-right">
					<a className="nav-link">Info</a>
					<a className="nav-link">Contact</a>
					<a className="nav-link">Pricing</a>
				</div>
			</div>
		</div>
	);
}

export default Nav;