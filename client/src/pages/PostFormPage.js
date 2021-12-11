import { AuthContext } from '../context/AuthContext';
import React from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import createEventPic from './images/createEvent.png';
import './css/create.css';

import PostsListPage from './PostsListPage';

class PostFormPage extends React.Component {
  
  state = {
    error: false,
    success: false,
    eventName: '',
    eventDescription: '',
    eventLocation: '',
    eventTime: '',
    eventDate:'',
    relevantInterests: '',
    hostId: this.context.user.id ,
  }

  eventNameChanged = (event) => {
    this.setState({
      eventName: event.target.value
    });
  }

  eventDescriptionChanged = (event) => {
    this.setState({
      eventDescription: event.target.value
    });
  }

  eventLocationChanged = (event) => {
    this.setState({
      eventLocation: event.target.value
    });
  }
  
  eventTimeChanged = (event) => {
    this.setState({
      eventTime: event.target.value
    });
  }
  eventDateChanged = (event) => {
    this.setState({
      eventDate: event.target.value
    });
  }
  relevantInterestsChanged = (event) => {
    this.setState({
      relevantInterests: event.target.value
    });
  }

  savePost = (event) => {

    console.log(this.state.eventName)
    fetch("/api/events/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          eventName: this.state.eventName, eventDescription: this.state.eventDescription, eventLocation: this.state.eventLocation, 
          eventTime: this.state.eventTime, eventDate: this.state.eventDate, relevantInterests: this.state.relevantInterests, 
          hostId: this.state.hostId , rsvpList: [this.state.hostId]
        }),
    })
      .then(res => {
        if(res.ok) {
          console.log("validated")
          console.log(res.body)
          return res.json()
        }

        throw new Error('Content validation');
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
          "There was an error saving this event."
        </div>
      );
    }

    return (
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-3">
        <img src = {createEventPic} alt="Create an event"></img>
            { errorMessage }
          <div className="input-group">
            <label htmlFor="name">
              <p className="event_prompt_info">Name your event</p>
              <input 
                type="text" 
                className="event_name_input"
                placeholder="Name" 
                value={this.state.eventName}
                onChange={this.eventNameChanged}
              />
            </label>
            <label htmlFor="description">
              <p className="event_prompt_info">Describe your event</p>
              <textarea 
                type="text" 
                className="event_description_input"
                placeholder="Description" 
                value={this.state.eventDescription}
                onChange={this.eventDescriptionChanged}
              />
            </label>
            <label htmlFor="location">
              <p className="event_prompt_info">Set location</p>
              <input 
                type="text" 
                className="event_location_input"
                placeholder="Location" 
                value={this.state.eventLocation}
                onChange={this.eventLocationChanged}
              />
            </label>
            <label htmlFor="time">
              <p className="event_prompt_info">Set date and time</p>
              <input 
                type="time" 
                className="event_time_input"
                value={this.state.eventTime}
                onChange={this.eventTimeChanged}
              />

              <input 
                type="date" 
                className="event_date_input"
                value={this.state.eventDate}
                onChange={this.eventDateChanged}
              />
            </label>
            <label htmlFor="interests">
              <p className="event_prompt_info">List relevant interests</p>
              <textarea 
                type="text" 
                className="event_interests_input"
                placeholder="interests" 
                value={this.state.relevantInterests}
                onChange={this.relevantInterestsChanged}
              />
            </label>

            </div>

            <Router>
              <Route path="/explore" component={PostsListPage} />
            </Router>

            <button className="btn btn-outline-secondary" onClick={this.savePost}>Create event</button>
          </div>
      </div>
    </div>
    );
  }
}

PostFormPage.contextType=AuthContext;
export default PostFormPage;