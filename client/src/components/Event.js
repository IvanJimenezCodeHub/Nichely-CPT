import React from 'react';
import { Link } from 'react-router-dom';
import './css/event.css';

function Event({ eventName, eventLocation, eventDescription, eventTime, eventDate, relevantInterests, createdAt, id }) {
  return (
    <div className="container">
      <div className="card mb-4">
        <div className="card-body card-text">
          <h5><Link to={"/events/" + id}>{eventName}</Link></h5>
          {eventDate}
          <br></br>
          {eventTime}
          <br></br>
          {eventLocation}
        </div>
      </div>
    </div>
  );
}

export default Event;