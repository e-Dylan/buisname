import React from "react";
import './styles/HomePage.scss';

const HomePage = () => {
	return (
		<section className="homepage">
			<div className="home-content">
				<div className="center-container">
					<div className="text-div">
						<div className="title-text">
							Every great product needs a stunning name.
						</div>
						<div className="desc-text">
							Give your new startups a name to be remembered - receive dropboxes of original domain names weekly.
						</div>
					</div>
					<div className="form-div">
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
				</div>
			</div>

				{/* <div className="signup">
					<form className="signup-form">
						<input className="submit-input" placeholder="email address"></input>
					</form>
				</div> */}

		</section>
		
	);
}

export default HomePage;