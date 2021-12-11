import React from 'react';
import Event from '../components/Event';
import './css/explore.css';
import './css/map.css';
import Loading from '../components/Loading';
import Maps from '../components/Maps';

import mapLogo from './images/mapLogo.png';
import searchBarPic from './images/searchPic.png';

class PostsListPage extends React.Component {
  state = {
    events: [],
    loading: true,
    eventName: '',
  }

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
              { this.state.events }
            </div>
          </div>
        </div>
            <div className="map">
              {Maps()}
            </div>

      </div>
        </div>
    );
  }
}

export default PostsListPage;