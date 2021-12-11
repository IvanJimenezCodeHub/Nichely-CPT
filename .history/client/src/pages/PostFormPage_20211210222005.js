import React from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import './css/create.css';
import './css/map.css';
import PostsListPage from './PostsListPage';
import Maps from '../components/Maps';
// import { Autocomplete } from '@react-google-maps/api';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import LocationSearch from '../components/LocationSearch';


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
     };

  

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
      body: JSON.stringify({eventName: this.state.eventName, eventDescription: this.state.eventDescription, eventLocation: this.state.eventLocation, eventTime: this.state.eventTime, eventDate: this.state.eventDate, relevantInterests: this.state.relevantInterests}),
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
      <div >
        <div >
          <h2 id="top_text_create">Create Event</h2>
            { errorMessage }
          <div >
            <div>
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
            </div>
            
            <div>
              <label htmlFor="time">
                <p className="event_prompt_info">Set date and time</p>
                <input 
                  type="time" 
                  className="event_time_input"
                  value={this.state.eventTime}
                  onChange={this.eventTimeChanged}
                />
              </label>
              </div>
              <div>
              <label htmlFor="date">
                <input 
                  type="date" 
                  className="event_date_input"
                  value={this.state.eventDate}
                  onChange={this.eventDateChanged}
                />
              </label>
            </div>
            <div>
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
            <div>
              {/* <label htmlFor="location">
                <p className="event_prompt_info">Set location</p>
                <input 
                  type="text" 
                  className="event_location_input"
                  placeholder="Location" 
                  value={this.state.eventLocation}
                  onChange={this.eventLocationChanged}
                />
              </label> */}
            
            </div>


            <div className="map">
          
              {Maps()}
            </div>
            

            <Router>
              <Route path="/explore" component={PostsListPage} />
            </Router>

            <button className="btn btn-primary" onClick={this.savePost}>Create event</button>
          </div>
          
      </div>
      {LocationSearch()}
    </div>
    );
  }

}





export default PostFormPage;