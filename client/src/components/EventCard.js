/* eslint-disable no-unused-vars */

/*
import React, { useContext } from 'react';
import './css/eventfull.css';
import { Link } from 'react-router-dom';
import req from 'express/lib/request';
import { authenticate } from 'passport';
import AuthButton from '../components/AuthButton';
import  {AuthContext} from '../context/AuthContext';
import Map from './Maps';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";


class EventCard extends React.Component{

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            userName: null,
            isRSVP : null,
            lat: null,
            lng: null,
            rsvpValue : 1,
            eventName: null,
            eventLocation: null,
            eventDescription: null,
            eventTime: null,
            eventDate: null,
            relevantInterests: null,
            eventId: null,
            hostID: null,
        }
      };

    
    componentDidMount() {
        console.log(this.props.data);
        //let {eventName, eventLocation, eventDescription, eventTime, eventDate, relevantInterests, id, longitude,latitude, hostId  } = this.props.data;
        this.setState({
            eventName: this.props.data.eventName,
            eventLocation: this.props.data.eventLocation,
            eventDescription: this.props.data.eventDescription,
            eventTime: this.props.data.eventTime,
            eventDate: this.props.data.eventDate,
            relevantInterests: this.props.data.relevantInterests,
            eventId: this.props.data.id,
            lat: this.props.data.latitude,
            lng: this.props.data.longitude,
            hostID: this.props.data.hostId,
        });

        this.getUserName(this.state.hostId);

      }
      
      getUserName(userID){
        // get the users name
        fetch("/api/userName/"+userID)
        .then(res => res.json())
        .then(user => {
            this.setState({
                userName: user.firstName + " " + user.lastName,
              })
        })
        .catch(err => console.log("API ERROR: ", err));
    }
    
     addToRSVP(eventId, userId)  {
    
        fetch("/api/events/" + eventId + "/" + userId, {
            method: 'PUT',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId , eventId: eventId
              }),
          })
          .then(res => {
              this.setState({
                rsvpValue: (this.state.rsvpValue+1)%2,
              })
            res.json()
          })
          .catch(err => {
            console.log("ERROR");
          });
    
    
    }

     GMap(){
        let latt = thisstate.lat;
        let lngg = this.state.lng;
        
        return (
            <GoogleMap 
                defaultZoom={11} 
                defaultCenter={{lat: latt, lng: lngg}}
            >         
                <Marker position={{lat: latt, lng: lngg }}></Marker>
            </GoogleMap>
        );
    }

    
    render( ){
    
        const rsvpNameArray = ['RSVP' , 'Un-RSVP'];
        let WrappedMap = withScriptjs(withGoogleMap(this.GMap)).bind(this);
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 text-left">
                        <h1>{this.state.eventName}</h1>
                        <p>{this.state.eventDescription} </p>
                        <p>Relevant interests: {this.state.relevantInterests} </p>
                        <button className="rsvpbtn btn btn-outline-secondary" onClick={() => this.addToRSVP(this.state.eventId, this.context.user.id).bind(this)}> {rsvpNameArray[this.state.rsvpValue]}</button>
                        <div className="user-info">
                            <div className="row">
                                <div className="col">
                                    <h3>Organizer</h3>
                                    <p className="user-name"><Link to={"/user/" + this.state.hostId}>{this.state.userName}</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-1">
    
                    </div>
                    <div className="col col-lg-4 d-flex justify-content-center">
                        <div className="map">
                            <p>Date: {this.state.eventDate}</p>
                            <p>Time: {this.state.eventTime}</p>
                            <p>Location: {this.state.eventLocation}</p>
                            <div style={{ width: "600px", height: "300px" }}>
                                <WrappedMap
                                    googleMapURL = {"https://maps.googleapis.com/maps/api/js?key=AIzaSyB8elomWP1QiWtBxQnatkC986I3ec2dl30&callback=initMap&libraries=&v=weekly"}
                                    loadingElement = {<div style={{ height: "100%" }} />}
                                    containerElement = {<div style={{ height: "100%" }} />}     
                                    mapElement = {<div style={{ height: "100%" }} />}                 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EventCard.contextType=AuthContext;
export default EventCard;

*/

