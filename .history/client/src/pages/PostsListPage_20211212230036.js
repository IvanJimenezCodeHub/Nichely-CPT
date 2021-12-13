import React from 'react';
import Event from '../components/Event';
import './css/explore.css';
import './css/map.css';
import Loading from '../components/Loading';
import Maps from '../components/Maps';

import mapLogo from './images/mapLogo.png';
import searchBarPic from './images/searchPic.png';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class PostsListPage extends React.Component {
  state = {
    events: [],
    loading: true,
    eventName: '',
  }

  GMap(){
    return (
        <GoogleMap 
            defaultZoom={11} 
            defaultCenter={{lat: 40.7128, lng: -74.0060}}
        > 
        {/* {this.state.events.map(event =>(
          <Marker 
            key = {event.props.id}
            position={{lat: event.props.latitude, lng: event.props.latitude }}></Marker>
        ))} */}
        
        
        </GoogleMap>
    );
  }

  WrappedMap = withScriptjs(withGoogleMap(this.GMap));

  eventNameChanged = (event) => {
    this.setState({
      eventName: event.target.value
    });
  }

  componentDidMount() {
    fetch("/api/events")
      .then(res => res.json())
      .then(events => {
        this.setState({
          loading: false,
          events: events.map((eventInfo,ii) => <Event {...eventInfo} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="results-list">
              <div className="search">
                <div className="input">
                  <label htmlFor="event">
                  <img className="searchBarTitle" alt="Search for an event" src = {searchBarPic}></img>
                  <input 
                    type="text" 
                    className="eventNameInput"
                    placeholder="Event" 
                    value={this.state.eventName}
                    onChange={this.eventNameChanged}
                  />
                  </label>
                </div>
              </div>
            <div className="event-box">
              {/* { this.state.events } */}
            </div>
          </div>
        </div>
            <div className="map">
            <div style={{ width: "600px", height: "400px" }}>
                <this.WrappedMap
                    googleMapURL = {"https://maps.googleapis.com/maps/api/js?key=AIzaSyB8elomWP1QiWtBxQnatkC986I3ec2dl30&callback=initMap&libraries=&v=weekly"}
                    loadingElement = {<div style={{ height: "100%" }} />}
                    containerElement = {<div style={{ height: "100%" }} />}     
                    mapElement = {<div style={{ height: "100%" }} />}                 
                    
                />
            </div>
            </div>
      
      </div>
      {console.log(this.state.events[0].events)}
        </div>
    );
  }
}

export default PostsListPage;