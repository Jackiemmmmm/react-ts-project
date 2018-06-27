import * as React from 'react';
import logo from '../../logo.svg';
import './App.css';

export default class Home extends React.PureComponent<{}, { test: number }> {
  public state = {
    test: 1
  }
  public render() {
    const { test } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
              {test}
        </p>
      </div>
    );
  }
}
