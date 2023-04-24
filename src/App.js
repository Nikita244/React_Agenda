import React from 'react';
import './App.css';
import Agenda from './Agenda';

function App() {
  return (
    <div className="App">
      <h1 className='text-dark text-center py-5 fw-bold'>Prossimi appuntamenti</h1>
    <Agenda></Agenda>
    </div>
  );
}

export default App;
