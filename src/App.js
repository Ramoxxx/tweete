import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'

import Header  from "./components/header/Header"

import Series from "./pages/series/Series.jsx"
import Popular from "./pages/popular/Popular.jsx"
import TopRated from "./pages/rated/TopRated.jsx"
import About from "./pages/about/About.jsx"
import Search from "./pages/search/Search.jsx"
import Serie from "./pages/serie/Serie"

function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <NavLink to="/popular" className="nav-link">Popular</NavLink>
        <NavLink to="/top-rated" className="nav-link">Top Rated</NavLink>
        <NavLink to="/on-air" className="nav-link">Airing Today</NavLink>
        <NavLink to="/about" className="nav-link">About </NavLink>
        <NavLink to="/search" className="nav-link">Search</NavLink>
        <Switch>
          <Route exact path="/" component={Popular}/>
          <Route path="/on-air" component={Series}/>
          <Route path="/top-rated" component={TopRated}/>
          <Route path="/popular" component={Popular}/>
          <Route path="/about" component={About}/>
          <Route path="/serie/:serieId" component={Serie}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
