import React, { Component } from 'react';
import './App.css';
import Header  from "./components/Header/Header.jsx"
import Card  from "./components/card/Card.jsx"


function App(){
  return (
    <div className="App">
      <Header/>
      <div className="content">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      </div>
  );
}

export default App;
