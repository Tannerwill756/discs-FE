import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home.js';
import Navigation from './pages/Navigation';
import Discs from './pages/Discs';


function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/discs" exact component={Discs}/>
      </Switch>
    </Router>
  );
}

export default App;
