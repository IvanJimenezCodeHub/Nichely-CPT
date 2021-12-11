import React from 'react';
import { Redirect } from 'react-router-dom';
import './css/signup.css';
import nichelyLogo from './images/nichely_logo.png';
import bookClubImg from './images/bookclub.jpg';
import gamingImg from './images/games.jpg';
import partyImg from './images/party2.jpg';
import soccerImg from './images/soccer.jpeg';

class SignUpPage extends React.Component {
    state = {
        error: false,
        success: false,
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
    }

    firstNameChanged = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lastNameChanged = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    emailChanged = (event) => {
        this.setState({
            emailAddress: event.target.value
        });
    }

    passwordChanged = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    saveUser = (event) => {
        fetch("/api/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.emailAddress,
                    password: this.state.password,
                }),
        })
            .then(res => {
                if (res.ok) {
                    console.log(res.body)
                    return res.json()
                }
                throw new Error('User validation Error');
            })
            .then(post => {
                this.setState({
                    success: true,
                });
            })
            .catch(err => {
                this.setState({
                    error: true,
                });
            });
    }

    render() {

        if(this.state.success) return <Redirect to="/explore" />;

        let errorMessage = null;
        if(this.state.error) {
          errorMessage = (
            <div className="alert alert-danger">
              "There was an error saving this user."
            </div>
          );
        }

        return (
            <div>
                <div class="row">
                    <div class="col">
                        <img src={gamingImg} id="gaming"></img>
                        <img src={bookClubImg} id="bookClub"></img>
                    </div>
                    <div class="col">
                        <div className='signUpContainer'>
                            <img src={nichelyLogo} id='nichelyLogo'></img>
                            {errorMessage}
                            <div>
                                <input
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    className='firstNameTxtBox'
                                    placeholder='First Name'
                                    value={this.state.firstName}
                                    onChange={this.firstNameChanged}
                                />
                                <br />
                                <input
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    className='lastNameTxtBox'
                                    placeholder='Last Name'
                                    value={this.state.lastName}
                                    onChange={this.lastNameChanged}
                                />
                                <br />
                                <input
                                    type='text'
                                    id='emailAddress'
                                    name='emailAddress'
                                    className='emailTxtBox'
                                    placeholder='Email'
                                    value={this.state.emailAddress}
                                    onChange={this.emailChanged}
                                />
                                <br />
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    className='passwordTxtBox'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.passwordChanged}
                                />
                                <br />
                                <input className='signUpBtn' type="submit" onClick={this.saveUser} value="Sign Up"></input>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <img src={soccerImg} id="soccer"></img>
                        <img src={partyImg} id="party2"></img>
                    </div>
                </div>
                <a href = './log-in'>
                    <input className = 'logInLink' type="submit" value= "Already have an account? Log In"></input>
                </a>
            </div>
        );
    }
}

export default SignUpPage;