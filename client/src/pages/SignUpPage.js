import React from 'react';
import './css/signup.css';
import nichelyLogo from './images/nichely_logo.png';
import bookClubImg from './images/bookclub.jpg';
import gamingImg from './images/games.jpg';
import partyImg from './images/party2.jpg';
import soccerImg from './images/soccer.jpg';

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
        return (
            <div>
                <div class="row">
                    <div class="col">
                        <img src={bookClubImg} id="bookClub"></img>
                        <img src={gamingImg} id="gaming"></img>
                    </div>
                    <div class="col">
                        <div className='signUpContainer'>
                            <img src={nichelyLogo} id='nichelyLogo'></img>
                            <div>
                                <label className='firstNameTxtBox' htmlFor='firstName'>First Name:</label>
                                <br />
                                <input
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    placeholder='First Name'
                                    value={this.state.firstName}
                                    onChange={this.firstNameChanged}
                                />
                                <br />
                                <label className='lastNameTxtBox' htmlFor='lastName'>Last Name:</label>
                                <br />
                                <input
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={this.state.lastName}
                                    onChange={this.lastNameChanged}
                                />
                                <br />
                                <label className='emailTxtBox' htmlFor='emailAddress'>Email Address:</label>
                                <br />
                                <input
                                    type='text'
                                    id='emailAddress'
                                    name='emailAddress'
                                    placeholder='Email'
                                    value={this.state.emailAddress}
                                    onChange={this.emailChanged}
                                />
                                <br />
                                <label className='passwordTxtBox' htmlFor='password'>Password:</label>
                                <br />
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.passwordChanged}
                                />
                                <br />
                                <input className='signUpBtn' type="submit" onClick={this.saveUser} value="Sign Up"></input>
                            </div>
                        </div>
                        <a href='./log-in'>
                            <input className='logInLink' type="submit" value="Already have an account? Log In"></input>
                        </a>
                    </div>
                    <div class="col">
                        <img src={partyImg} id="party2"></img>
                        <img src={soccerImg} id="soccer"></img>
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