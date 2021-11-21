import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch,Route, Redirect} from "react-router-dom"

import Home from './components/Home';
import About from "./components/About"
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
    </React.Fragment>
  );
}

export default App;
