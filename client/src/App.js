
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import UserPage from './pages/UserPage';
import { AuthProvider } from './context/AuthContext';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import nichelyLogo from './pages/images/nichely_logo.png';

import './App.css';

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light shadow mb-3">
      <Link className="navbar-brand" to="/events">
        <img 
        src={nichelyLogo} 
        width="135px"
        height="70px"
        className="d-inline-block align-top">
        </img>
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/explore">
            Explore
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/events/new">
            Create
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/log-in" component={LoginPage} />
                <PublicRoute restricted={true} path="/signup" component={SignUpPage} />
                <PrivateRoute path="/events/new" component={PostFormPage} />
                <PrivateRoute path="/events/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/explore" component={PostsListPage} />
                <Route path="/user/:id" component={UserPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
