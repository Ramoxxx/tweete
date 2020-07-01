import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'

import Header  from "./components/Header/Header.jsx"

import Series from "./pages/series/Series.jsx"
import About from "./pages/about/About.jsx"
import Search from "./pages/search/Search.jsx"


function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <NavLink to="/releases" className="nav-link">Releases </NavLink>
        <NavLink to="/about" className="nav-link">About </NavLink>
        <NavLink to="/search" className="nav-link">Search </NavLink>
        <Switch>
          <Route exact path="/" component={Series}/>
          <Route path="/releases" component={Series}/>
          <Route path="/about" component={About}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
