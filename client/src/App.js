import React, { useState, Component } from 'react'
import SearchBar from './components/SearchBar'
import Popup from './components/Popup'


class App extends Component {

  render() {
    return (
 
      <div className="App">
        <h1> Movie Search </h1>
        
        <div>
         <SearchBar/>
   
        </div>
  
      </div>
  
    )

  }
}

export default App;
