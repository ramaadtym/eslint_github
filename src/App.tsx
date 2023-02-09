import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  var foo = {
    bar: 'baz',
    qux: 'quux',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Test Eslint on github Action 001
        </a>
      </header>
    </div>
  );
}

export default App;
