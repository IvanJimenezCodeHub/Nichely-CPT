import React from 'react';
import Event from '../components/Event';
import Loading from '../components/Loading';


class PostsListPage extends React.Component {
  state = {
    events: [],
    loading: true,
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
            1 of 2
          </div>
        <div className="col">
            2 of 2
        </div>
      </div>
          { this.state.events }
        </div>
    );
  }
}

export default PostsListPage;