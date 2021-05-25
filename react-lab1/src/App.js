import React, { Component } from 'react';
import Profile from './components/profile'
import Data from './components/data';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (  
      <div className="max-w-7xl mx-auto lg:px-8 shadow-md m-10 w-1/2 text-center">
        <Profile></Profile>
        <br /> 
        <Data></Data>
      </div>
    );
  }
}
 
export default App;
