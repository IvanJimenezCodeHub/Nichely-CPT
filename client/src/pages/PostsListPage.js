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
          events: events.map((p,ii) => <Event {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          { this.state.events }
        </div>
      </div>
    );
  }
}

export default PostsListPage;