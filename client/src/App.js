import React, { useState, Component } from 'react'
import SearchBar from './components/SearchBar'
import Popup from './components/Popup'


class App extends Component {

  render() {
    return (
 
      <div className="App">
        {/* add respondsive banner to app  */}
        <div className='hero-banner'>
          <div className='hero-container'>
            {/* <h1 className='title'> Movie Search </h1> */}
            {/* <SearchBar/> */}
          </div>
          
        </div>

        <div>
         <SearchBar/>
   
        </div>


  





        {/* <h1 className='title'> Movie Search </h1>
        
        <div>
         <SearchBar/>
   
        </div> */}
  
      </div>
  
    )

  }
}

export default App;
