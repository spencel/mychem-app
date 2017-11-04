// Source: https://reactjs.org/docs/introducing-jsx.html
// Bookmark: The Data Flows Down

import React from 'react';

class Clock extends React.Component {

  static increment = 1;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
    };
  }
  // Event: lifecycle hook: runs after component output has been rendered to the DOM.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.counterID = setInterval(
      () => this.count(),
      250
    );
  }
  // Event: lifecycle hook: runs if this component is ever removed from the DOM.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  count() {
    console.log( this.state.counter );
    // setState() asynchronously rerenders the component, therefore, do not rely on it for calculating the next state.
    this.setState((prevState, increment) => ({
      counter: Number(prevState.counter) + Number(Clock.increment)
    }));
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toString()}.</h2>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

class App extends React.Component {
  // if something is not used in render then it should not be in the state declaration.
  render() {
    return (
      <Clock/> // Calls Clock.constructor()
    );
  }
}

export default App;