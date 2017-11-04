import React from 'react';

class RctButton extends React.Component {
	// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.
	static defaultProps = {
		id: undefined,
		rctCaption: "Button"
	}
	constructor( props ) {
		super( props );
		this.state = {
			// props can have a state mutable state counterpart, thereby props act as an initial or default values for state values
			rctCaption: props.rctCaption
		};
	}
	/* Mounting sequence: These methods are called when an instance of a component is being created and inserted into the DOM:
				1. constructor()
				2. componentWillMount()
				3. render()
				4. componentDidMount()
	*/
	componentWillMount() {
		console.log( "RctButton.componentWillMount()" );
	}
	componentDidMount() {
		console.log( "RctButton.componentDidMount()" );
	}
	/* Updating sequence: An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:
				1. componentWillReceiveProps()
				2. shouldComponentUpdate()
				3. componentWillUpdate()
				4. render()
				5. componentDidUpdate()
	*/
	componentWillReceiveProps() {
		console.log( "RctButton.componentWillReceiveProps()" );
	}
	// Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
	// shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
	/*shouldComponentUpdate() {
		console.log( "RctButton.shouldComponentReceiveProps()" );
	}*/
	componentWillUpdate() {
		console.log( "RctButton.componentWillUpdate()" );
	}
	componentDidUpdate() {
		console.log( "RctButton.componentDidUpdate()" );
	}
	// Unmounting: This method is called when a component is being removed from the DOM:
	componentWillUnmount() {
		console.log( "RctButton.componentWillUnmount()" );
	}
	// Error handling: This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
	componentDidCatch() {
		console.log( "RctButton.componentDidCatch()" );
	}
	// handleOnClick( event ) { // This onClick syntax creates a call back every time this button renders, which can cause performance issues.
	handleOnClick = ( id, proxy, event ) => {
		console.log( "this:" )
		console.log( this )
		console.log( "proxy:")
		console.log( proxy )
		console.log( "event:")
		console.log( event )
		console.log( "id: " + id )
		console.log( "this.props.id: " + this.props.id );
		// prevState is a reference to the previous state. It should not be directly mutated. Instead, changes should be represented by building a new object based on the input from prevState and props.
		this.setState(( prevState, props ) => {
			return { rctCaption: prevState.rctCaption + " - Clicked!" }
		});
		this.props.rctOnInput();
	}
	render() {
    return (
    	// This onClick syntax creates a call back every time this button renders, which can cause performance issues.
      /*<div className="RctButton" onClick={( event ) => this.handleOnClick( event )}>
      	{ this.state.rctCaption }
      </div>*/
      // Pay attention to the way .bind( args ) are passed and which args are automatically passed
      <div id={ this.props.id } className="RctButton" onClick={ this.handleOnClick.bind( this, this.props.id ) }>
      	{ this.state.rctCaption }
      </div>
    );
  }
}

export default RctButton;