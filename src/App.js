import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Selamat Datang di Aplikasi React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p className="App-asik">Percobaan break</p>
          <p>Content Inside</p>
          <p>Belajar Membuat Aplikasi WEB JavaScript</p>

      </div>
    );
  }
}

export default App;
