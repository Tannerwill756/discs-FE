import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home.js';
import Navigation from './pages/Navigation';


function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
