import React from 'react';
import { Redirect } from 'react-router-dom';
import './css/create.css';

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    eventName: '',
    eventDescription: '',
    eventLocation: ''
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

  savePost = (event) => {
    console.log(this.state.eventName)
    fetch("/api/events/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({eventName: this.state.eventName, eventDescription: this.state.eventDescription, eventLocation: this.state.eventLocation}),
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
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this event."
        </div>
      );
    }

    return (
      <div className="row justify-content-center">
        <div className="col-4">
          <h2 id="top_text_create">Create Event</h2>
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
              <input 
                type="textarea" 
                className="event_description_input"
                placeholder="Description" 
                value={this.state.eventDescription}
                onChange={this.eventDescriptionChanged}
              />
            </label>
            <label htmlFor="location">
              <p className="event_prompt_info">Choose location</p>
              <input 
                type="text" 
                className="event_location_input"
                placeholder="Location" 
                value={this.state.eventLocation}
                className="location"
                onChange={this.eventLocationChanged}
              />
            </label>
            <button className="btn btn-primary" onClick={this.savePost}>Create event</button>
          </div>
      </div>
    </div>
    );
  }
}

export default PostFormPage;