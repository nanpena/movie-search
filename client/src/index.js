import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar.js'


ReactDOM.render(
  <React.StrictMode>
      <NavBar/>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


