import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings/Greetings';

function App() {
  return (
      <div className="App">
          <Greetings name={'Maria'} lastname={'Soria'}/>
      </div>
  );
}

export default App;
