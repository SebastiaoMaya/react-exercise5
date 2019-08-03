import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  state = {
    input: ''
  };

  updateValue = input => {
    this.setState({ input: input });
  };

  render() {
    const { input } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>ReactND - Coding Practice</h1>
        </header>
        <div className='container'>
          <input
            type='text'
            placeholder='Say Something'
            value={input}
            onChange={event => this.updateValue(event.target.value)}
          />
          <p className='echo'>Echo:</p>
          <p>{input}</p>
        </div>
      </div>
    );
  }
}

export default App;
