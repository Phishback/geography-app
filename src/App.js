import React, { Component } from 'react';
import Search from './Components/Search';
import ResultList from './Components/ResultList';
import Sidebar from './Components/Sidebar';
import Result from './Components/Result';
import logo from './logo.svg';
import './App.css';




function App(props) {
  console.log(props.database);
  return (
    <div className="main container card">
      <h1>Geography Search App</h1>
      <Search />
      <div className="row">
      <ResultList 
        countries = {props.database}
      />
      <Sidebar 
        countries = {props.database}
      />
      </div>
    </div>
  )
}

export default App;
