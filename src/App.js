import React, { Component } from 'react';
import Home from './components/pages/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Project from './components/pages/Project'
import About from './components/pages/About'
import Experience from './components/pages/Experience'
import Sas from './components/pages/Sas'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          {/* <div className='wrapper'> */}
            <Navbar />
            <div className='content-wrapper'>
              <Sidebar />
              <div className='body-container'>
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path ="/about" component={About}/>
                <Route exact path ="/experience" component={Experience}/>
                <Route exact path="/projects" component={Project} />
                <Route exact path="/projsasects" component={Sas} />
              </Switch>
              </div>
            </div>
          {/* </div> */}
      </Router>
    );
  }
}

export default App;
