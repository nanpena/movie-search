import React from 'react'
import SearchBox from './components/SearchBox'
import SearchButton from './components/SearchButton'

function App() {
  return (
    <div className="App">
      <h1> Movie Search </h1>
      
      <div>
       <SearchBox/>
       <SearchButton/>
      </div>

    </div>
  );
}

export default App;
