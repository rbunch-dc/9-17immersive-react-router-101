import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Add the react router
// BrowserRouter as Router is the main Component
// Link is the new <a href="">. React-router will convert the Link tag into an a tag that is safe
// Think of Route like router.get... what to do if the user comes to this route
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Topics from './Topics';

class App extends Component {
  render() {
    return (
      // Router goes around everything that should be controlled by the router
      <Router>
        <div className="App">
          {/*The Link component will protect our app from "leaving" our .html page*/}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>

          {/*If you ONLY want to match the exact path, use exact*/}
          <Route exact path="/" render={() => (
            <Home title="Home Page" teams={['Pats','Vikings','Falcons']} />
          )}/>
          {/*<Route exact path="/" component={Home} />   */}
          <Route path="/about" component={About} />   
          <Route path="/topics" component={Topics} />

        </div>
      </Router>
    );
  }
}

export default App;
