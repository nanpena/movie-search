import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Popup from './components/Popup'

function App() {

  return (
    <Router>
    <div className="App">
      <h1> Movie Search </h1>
      
      <div>
       <Route path='/moviebyid'/>
       <SearchBar/>
 
      </div>

    </div>
    </Router>
  );
}

export default App;
