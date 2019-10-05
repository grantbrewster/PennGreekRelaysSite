import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import ListScrollToItemOutside from './ListScrollToItemOutside';

function App() {
  return (
    <div className="container">
      <div id="top banner" align = "center">
        <figure align="center">
        <h3 align='center' className='App-Title'>THE PENN GREEK RELAYS</h3>
        </figure>
      </div>
      
      <ListScrollToItemOutside />
      <hr />
    </div>
  );
}

export default App;
