import React, { Component } from 'react';
import './App.css';
import RctTemplate from './RctTemplate';
import RctMainMenu from './RctMainMenu';
import RctViewPort from './RctViewPort';

class App extends Component {

	handleEvents() {

		console.log("handling events");

	}

  render() {
    return (
      <div className="App">
      	{/*<RctTemplate/>*/}
        <RctMainMenu/>
        <RctViewPort/>
      </div>
    );
  }

}

export default App;