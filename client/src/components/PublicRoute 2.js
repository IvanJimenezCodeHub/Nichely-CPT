import React, { useContext } from 'react';
import{ Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const auth = useContext(AuthContext)

  return(
    <Route {...rest} render={(props) => (
      auth.isAuthenticated && restricted
        ? <Redirect to={{
            pathname: '/explore',
            state: { from: props.location }
          }} />
        : <Component {...props} />
    )} />
  )
};

export default PublicRoute;