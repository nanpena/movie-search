import React, {Component } from 'react'
import SearchBar from './SearchBar'
import Banner from './Banner'


class App extends Component {

  render() {
    return (
      
      <div className="App">
         <Banner/> 
         <SearchBar/>
      </div> 
      
      )}
}

export default App;
