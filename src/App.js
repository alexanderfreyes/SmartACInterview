import React from 'react';
import './App.css';
import TexasSeal from './components/texasSeal';
import TexasHeader from './components/texasHeader';

function App() {
  return (
    <div className="App">
    <TexasHeader/>
      <header className="App-header">
        
        <TexasSeal/>
        <p>
          About Texas
        </p>
      </header>
    </div>
  );
}

export default App;
