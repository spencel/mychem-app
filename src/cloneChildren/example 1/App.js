// Source: https://egghead.io/lessons/react-use-react-cloneelement-to-extend-functionality-of-children-components
// This doesn't seem to work

import React from 'react';
//import Buttons from './Buttons.jsx';

class App extends React.Component {
  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">C</button>
        <button value="C">C</button>
      </Buttons>
    );
  }
}

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {selected: 'None'}
  }
  selectedItem(selected){
    this.setState({selected})
  }
  render() {
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      });
    let items = React.Children.map(this.props.child, fn);
    return (
      <div>
        <h2>You have Selected: {this.state.selected}</h2>{items}
      </div>
    );
  }
}

export default App;