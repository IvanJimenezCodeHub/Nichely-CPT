import React from 'react';
import Event from '../components/Event';


class UserPage extends React.Component {

    state = {
        loading: true,
        events: null,
        notFound: false,
        userName: "default",
      }
      
      componentDidMount() {
        const { id } = this.props.match.params;

                // get the users name
        fetch("/api/userName/"+id)
          .then(res => res.json())
          .then(user => {
            this.setState({
              userName: (user.firstName + " " + user.lastName),
            });
          })
          .catch(err => console.log("API ERROR: ", err));

            // get the events correlated to this user ID
        fetch("/api/user/"+id)
          .then(res => res.json())
          .then(events => {
            this.setState({
              loading: false,
              events: events.map((eventInfo,ii) => <Event {...eventInfo} key={ii} />)
            });
          })
          .catch(err => console.log("API ERROR: ", err));
      }


      render() {
        return( 
          <div>
            <div className="user-info">
                <h3>{this.state.userName}'s events</h3>
            </div>
            <div className="hosted-events">
                  <p>{this.state.events}</p>
            </div>
        </div>
        );
      }
      
    }

export default UserPage;

