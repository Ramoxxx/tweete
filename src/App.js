import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'

import Header  from "./components/Header/Header.jsx"

import Profiles from "./pages/profiles/Profiles.jsx"
import About from "./pages/about/About.jsx"


function App(){
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <NavLink to="/profiles" className="nav-link">Profiles</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <Switch>
          <Route exact path="/" component={Profiles}/>
          <Route path="/profiles" component={Profiles}/>
          <Route path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
