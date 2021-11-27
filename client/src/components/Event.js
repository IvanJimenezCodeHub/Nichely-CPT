import React from 'react';
import { Link } from 'react-router-dom';

function Event({ eventName, eventLocation, eventDescription, eventTime, eventDate, relevantInterests, createdAt, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div  className="card-body card-text ">
         
          <b>Event:</b> <Link to={"/events/"+id}>{ eventName }</Link>
          <br></br>
          <b>Event Location:</b> { eventLocation }
          <br></br>
          <b>Event Time:</b> { eventTime} 
          <br></br>
          <b>Event Date:</b> {eventDate}
          <br></br>
          <b>Description:</b> { eventDescription} 
          <br></br>
          <b>Revevant interests:</b> { relevantInterests} 
          
        </div>
        <div className="card-footer small text-muted text-right">
          { createdAt }
        </div>
      </div>
    </div>
  );
}

export default Event;