import React from 'react';
import { Redirect } from 'react-router-dom';
import './css/login.css';
import partyImage from './images/party.jpg';
import yogaImage from './images/yoga.jpg';
import selfieImage from './images/selfie.jpg';
import sportsImage from './images/sports.jpg';
import nichelyLogo from './images/nichely_logo.png';

import { AuthContext } from '../context/AuthContext';

class LoginPage extends React.Component{
    state = {
        redirectToReferrer: false,
        failed: false,
        email: "",
        password: "",
    }

    fieldChanged = (name) => {
        return (event) => {
          let { value } = event.target;
          this.setState({ [name]: value });
        }
    }
    
    login = (e) => {
        e.preventDefault();
        const auth = this.context;
        let { email, password } = this.state;
        auth.authenticate(email, password)
          .then((user) => {
            this.setState({ redirectToReferrer: true });
          })
          .catch((err) => {
            this.setState({ failed: true });
          });
    }

    /*
    constructor(props){
        super(props)
        this.state = { email:'', password:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      handleSubmit(event){
        const { email, password } = this.state
        event.preventDefault()
        alert('Email:' + email + ' Password: ' + password)
      }

      handleChange(event){
          this.setState({
            [event.target.name] : event.target.value
          })
        }
    */
        
render(){
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }

    return (
        <div className = "container">
            <div className = "row">
                <div className = "parent" className = "col-md-6">
                    <h1 className="motto">Nothing is ever too niche</h1>
                    <img src={yogaImage} id = "yoga"></img>
                    <img src={partyImage} id = "party"></img>
                    <img src={selfieImage} id = "selfie"></img>
                    <img src={sportsImage} id = "sports"></img>
                </div>
            
            <div className = "col-md-6">
                <div className = "log-in-container">
                    <img src = {nichelyLogo} id = "log-in-logo"></img>
                    <form onSubmit = {this.login}>
                        {err}
                            <label htmlFor = "emailaddress">
                                <input
                                    className = "email-text-prompt"
                                    type = "email"
                                    name = "email"
                                    value = {this.state.email}
                                    placeholder = 'Email'
                                    onChange = {this.fieldChanged('email')} 
                                />
                            </label>
                            <br/>
                            <label htmlFor = "password">
                                <input
                                    className = "password-text-prompt"
                                    type = "password"
                                    name = "password"
                                    value = {this.state.password}
                                    placeholder = 'Password'
                                    onChange = {this.fieldChanged('password')} 
                                />
                            </label>
                            <div className = "log-in-button">
                                <button className = "btn-log-in">Log In</button>
                            </div>
                        </form>
                    </div>

                <div className = "sign-up-container">
                    <p id = "sign-up-text-link">Don't have an account? <a href = "./signup">Sign Up</a></p>
                </div>
            </div>
        </div>
    </div>
    );
}

}
LoginPage.contextType = AuthContext

export default LoginPage;