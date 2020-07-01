import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'

import Header  from "./components/Header/Header.jsx"

import Series from "./pages/series/Series.jsx"
import About from "./pages/about/About.jsx"


function App(){
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <NavLink to="/series" className="nav-link">Series</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <Switch>
          <Route exact path="/" component={Series}/>
          <Route path="/series" component={Series}/>
          <Route path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
