import React from 'react';
import './css/login.css';
import partyImage from './images/party.jpg';
import yogaImage from './images/yoga.jpg';
import selfieImage from './images/selfie.jpg';
import sportsImage from './images/sports.jpg';
import nichelyLogo from './images/nichely logo.png';

function LogInPage(props) {
    return (
        <div className="container">
            <div className = "row">
                <div id="parent" className="col-md-6">
                    <h1 className="motto">Nothing is ever too niche</h1>
                    <img src={yogaImage} id="yoga"></img>
                    <img src={partyImage} id="party"></img>
                    <img src={selfieImage} id="selfie"></img>
                    <img src={sportsImage} id="sports"></img>
                </div>
            <div className="col-md-6">
                <div className="log-in-container">
                    <img src={nichelyLogo} id="log-in-logo"></img>
                    <div className="email-address">
                        <p className="email-text-prompt">Email address</p>
                        <input type="email"></input>
                    </div>
                    <div className="password">
                        <p className="password-text-prompt">Password</p>
                        <input type="password"></input>
                    </div>
                    <div className="log-in-button">
                        <button className="btn-log-in">Log In</button>
                    </div>

                </div>
                <div className="sign-up-container">
                    <p id="sign-up-text-link">Don't have an account? <a href="#">Sign Up</a></p>
                </div>
            </div>
            </div>
        </div>
    );
}
  
  export default LogInPage;