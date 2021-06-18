//router setting up
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Summary from './pages/summary';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Budget App</h1>
      <Router>
        <div>
          <nav className="App-nav">
            <ul>
              <li className="App-list">
                <Link className="list-link" to="/">Home</Link>
                <Link className="list-link" to="/login">Log in</Link>
                <Link className="list-link" to="/signup">Sign up</Link>
                <Link className="list-link" to="/profile">Profile</Link>
                <Link className="list-link" to="/dashboard">Dashboard</Link>
                <Link className="list-link" to="/summary">Summary</Link>
              </li>
            </ul>
          </nav>
          {
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/summary">
                <Summary />
              </Route>
            </Switch>
          }
        </div>
      </Router>
    </div>

  );
}

export default App;
