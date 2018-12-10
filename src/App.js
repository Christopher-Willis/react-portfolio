import React, { Component } from 'react';
import Portfolioitems from './components/portfolioitems/Portfoiloitem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Portfolioitems title="This Webpage :D">
          </Portfolioitems>
        </header>
      </div>
    );
  }
}

export default App;
