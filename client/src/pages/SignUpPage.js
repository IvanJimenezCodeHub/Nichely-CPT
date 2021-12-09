import React from 'react';
import ReactDOM from 'react-dom';
import './css/signup.css';
import nichelyLogo from './images/nichely_logo.png';
import bookClubImg from './images/bookclub.jpg';
import gamingImg from './images/games.jpg';
import partyImg from './images/party2.jpg';
import soccerImg from './images/soccer.jpg';

class SignUpPage extends React.Component{
    render() {
        return(
            <div>
                <div className = 'signUpContainer'>
                    <img src = {nichelyLogo} id = 'nichelyLogo'></img>
                    <form>
                        <label className = 'emailTxtBox' htmlFor = 'emailAddress'>Email Address:</label>
                        <br />
                        <input type = 'text' id = 'emailAddress' name = 'emailAddress' placeholder = 'Email'/>
                        <br />
                        <label className = 'passwordTxtBox' htmlFor = 'password'>Password:</label>
                        <br />
                        <input type = 'password' id = 'password' name = 'password' placeholder = 'Password'/>
                        <br />
                        <input className = 'signUpBtn' type="submit" value= "Sign Up"></input>
                    </form>
                </div>
                <a href = './log-in'>
                        <input className = 'logInLink' type="submit" value= "Already have an account? Log In"></input>
                </a>
            </div>
        );
    }
}

/* 
ReactDOM.render(
    <SignUpPage />, document.getElementById('root')
);
*/

export default SignUpPage;
