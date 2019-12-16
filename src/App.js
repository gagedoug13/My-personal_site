import React from 'react';
import './App.css';
import Main from './components/Main'


function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <ul className="ulNavBar">
          <li>home</li>
          <li>slone</li>
          <li>grown</li>
        </ul>
      </nav>
      <Main />
    </div>
  );
}

export default App;