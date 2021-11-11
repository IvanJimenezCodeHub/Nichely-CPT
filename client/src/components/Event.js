import React from 'react';
import { Link } from 'react-router-dom';

function Event({ eventName, createdAt, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
         
          <Link to={"/events/"+id}>{ eventName }</Link>
          {/* <Link to={"/events/"+id}>{ e.eventLocation }</Link>
          <Link to={"/events/"+id}>{ e.eventDescription} </Link> */}
        </div>
        <div className="card-footer small text-muted text-right">
          { createdAt }
        </div>
      </div>
    </div>
  );
}

export default Event;