import React from "react";
import RocketAnimation from "./RocketAnimation";
import './styles/HomePage.scss';

import homeBackground from '../resources/homepage/star-animation.gif';

/**
 * FRONT PAGE:
 * INCLUDE MORE EXPLANATION ON DATA RECEIVED:
 * - show price,
 * - show popularity,
 * - show when/if last owned, how likely it is to be taken soon
 * - always find domains when they are available, automatically
 */

const HomePage = () => {
	return (
		<div className="homepage">
			<div id="home-background">
				{/* <img src={homeBackground} /> */}
			</div>
			<div className="home-content">
				<div className="center-container">
					<div className="main-content">
						<div className="text-div">
							<div className="title-text">
								every great <span>product</span><br/>needs a stunning name.
							</div>
							<div className="desc-text">
								launch your new startups with a name to be remembered - receive dropboxes of original, available, and defining domains weekly.
							</div>
						</div>

						<div className="form-container">
							<form className="signup-form">
								<span className="form-title">Receive startup names</span>
								<div className="inputs-container">
									<input className="input-field" placeholder="first name"></input>
									<input className="input-field" placeholder="email address"></input>
									<button className="submit-button">Sign up with email</button>
								</div>
							</form>
						</div>
					</div>
					<div className="animation-col">
						<RocketAnimation />
					</div>
				</div>
			</div>

				{/* <div className="signup">
					<form className="signup-form">
						<input className="submit-input" placeholder="email address"></input>
					</form>
				</div> */}

		</div>
		
	);
}

export default HomePage;