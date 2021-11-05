import React from 'react';
import { Redirect } from 'react-router-dom';

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
    fetch("/api/events/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({eventName: this.state.eventName, eventDescription: this.state.eventDescription, eventLocation: this.state.eventLocation })

    })
      .then(res => {
        if(res.ok) {
          console.log("validated")
          return res.json()
        }
        console.log(res.body);
        console.log("not valid");
        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        console.log("err caught by savePost() ");
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
      // todo: 
        // make these 3 form items into one column
        // thoughts? -- matin
      <div className="col-10 col-md-8 col-lg-7">
        { errorMessage }
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Add event Name" 
            value={this.state.eventName}
            className="form-control mr-3 rounded"
            onChange={this.eventNameChanged}
          />
          <input 
            type="text" 
            placeholder="Add event description" 
            value={this.state.eventDescription}
            className="form-control mr-3 rounded"
            onChange={this.eventDescriptionChanged}
          />
          <input 
            type="text" 
            placeholder="Add event location" 
            value={this.state.eventLocation}
            className="form-control mr-3 rounded"
            onChange={this.eventLocationChanged}
          />
          <button className="btn btn-primary" onClick={this.savePost}>Save event</button>
        </div>
      </div>
    );
  }
}

export default PostFormPage;