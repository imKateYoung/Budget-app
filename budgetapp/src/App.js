//router setting up
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import Dashboard from './components/pages/dashboard';
import Profile from './components/pages/profile';
import Summary from './components/pages/summary';
import Signup from './components/pages/signup';
import Login from './components/pages/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/summary" component={Summary} />
            <Route path="/profile" component={Profile} />
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
