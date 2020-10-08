import React, { Component } from 'react';
import Home from './components/pages/Home';
import NavBar from './components/Navbar/Navbar';
import './App.css';
import Project from './components/pages/Project'
import About from './components/pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path ="/about" component={About}/>
            <Route exact path="/projects" component={Project} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
