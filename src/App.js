import React, { Component } from 'react';
import './App.css';
import Calendar from "./Components/Calendar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;