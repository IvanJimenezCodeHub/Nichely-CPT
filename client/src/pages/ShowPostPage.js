import React from 'react';
import EventFull from '../components/EventFull';
import { AuthContext } from '../context/AuthContext';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class ShowPostPage extends React.Component {
  state = {
    loading: true,
    event: null,
    notFound: false,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/events/"+id)
      .then(res => res.json())
      .then(ev => {
        this.setState({
          event: <EventFull {...ev} />,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          notFound: true,
        });
      });
  }


  render() {
    if(this.state.notFound) return <Redirect to="/" />;
    if(this.state.loading) return <Loading />;
    return( 
      <h1>{this.state.event}</h1>
    );
  }
}

ShowPostPage.contextType=AuthContext;
export default ShowPostPage;