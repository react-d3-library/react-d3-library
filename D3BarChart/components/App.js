import React, {Component} from 'react';
import {render} from 'react-dom';
import Container from './Container';

export default class App extends Component {
  render() {
    return (
      <div id='App'>
        App
        <Container />
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
