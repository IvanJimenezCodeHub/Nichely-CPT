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
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { AuthProvider } from './context/AuthContext';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/events">Nichely!</Link>

      <ul className="navbar-nav mr-auto">
        {/*<li className="nav-item">
          <NavLink className="nav-link" exact to="/log-in">
            Log In
          </NavLink>
        </li>
        */}
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
                <Route path="/signup" component={SignUpPage} />
                <PrivateRoute path="/events/new" component={PostFormPage} />
                <Route path="/events/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/explore" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}


export default App;
