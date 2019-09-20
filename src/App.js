import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import ListScrollToItemOutside from './ListScrollToItemOutside';

function App() {
  return (
    <div className="container">
      <div id="top banner">
        <figure>
        <img align = 'center' height = '50px' src= {logo} alt='randoms' id="img1"/>
        <h3 align='center' class='App-Title'>Penn Greek Relays</h3>
        </figure>
      </div>
      
      <ListScrollToItemOutside />
      <hr />
    </div>
  );
}

export default App;
