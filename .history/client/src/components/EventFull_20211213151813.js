/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './css/eventfull.css';
import { Link } from 'react-router-dom';
import req from 'express/lib/request';
import { authenticate } from 'passport';
import AuthButton from '../components/AuthButton';
import  {AuthContext} from '../context/AuthContext';
import Map from './Maps';


function addToRSVP(eventId, userId)  {

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
      .then(res => res.json())
      .catch(err => {
        console.log("ERROR");
      });

}

function EventFull({ eventName, eventLocation, eventDescription, eventTime, eventDate, relevantInterests, id, latitude}) {

    let auth = useContext(AuthContext);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-7 text-left">
                    <h1>{eventName}</h1>
                    <p>{eventDescription} </p>
                    <p>Relevant interests: {relevantInterests} </p>
                    <button className="rsvpbtn btn btn-outline-secondary" onClick={() => addToRSVP(id, auth.user.id)}>RSVP</button>
                    <div className="user-info">
                        <div className="row">
                            <div className="col">
                                <h3>Organizer</h3>
                                <p className="user-name"><Link to="/user/">Username</Link></p>
                                <p>user bio here!!!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-1">

                </div>
                <div className="col col-lg-4 d-flex justify-content-center">
                    <div className="map">
                        <p>Date: {eventDate}</p>
                        <p>Time: {eventTime}</p>
                        <p>Location: {eventLocation}</p>
                        <p>Latitude: {latitude} </p>
                        <p>Longitude: {longitude} </p>
                        <h2>{Map()}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventFull;