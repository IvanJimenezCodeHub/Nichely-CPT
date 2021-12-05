import React from 'react';
import './css/eventfull.css';
import { Link } from 'react-router-dom';

function EventFull({ eventName, eventLocation, eventDescription, eventTime, eventDate, relevantInterests, createdAt, id }) {
  return (
    <div className="container">
        <div className="row">
            <div className="col col-lg-7 text-left">
                <h1>{ eventName }</h1>
                <p>{ eventDescription} </p>
                <p>Relevant interests: { relevantInterests} </p>
                <button className="rsvpbtn btn btn-primary">RSVP</button>
                <button className="bookmarkbtn btn btn-secondary">Bookmark</button>
                <div className="user-info">
                    <div className="row">
                        <div className="col">
                            <h3>Organizer</h3>
                            <p className="user-name"><Link to="/">User</Link></p>
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
                <p>Time: { eventTime}</p>
                <p>Location: {eventLocation}</p>
                <h2>Map here, perhaps</h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default EventFull;