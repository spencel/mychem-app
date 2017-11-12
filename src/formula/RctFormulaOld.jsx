import React from 'react';
import * as MathJax from 'react-mathjax';

class RctFormula extends React.Component {
	constructor( props ) {
		super( props );
    this.state = {
      arrJsx: this.buildJsx( props.rctData.content, [], 0 )
    };
	}
  componentWillReceiveProps( nextProps ){
    console.log("RctFormula.componentWillReceiveProps()");
    console.log(nextProps.rctData.content);
    var data = nextProps.rctData.content
    this.setState({
      arrJsx: this.buildJsx( data, [], 0 )
    });
  }
  componentDidUpdate() {
    console.log( "RctFormula.componentDidUpdate()" );
    console.log( this.state.arrJsx );
  }
  buildJsx( data, arrJsx, level ) {
    console.log("RctFormula.buildJsx");
    //console.log("arrJsx:");
    //console.log(arrJsx);
    console.log(this.props);
    console.log("this.props.rctData.isHtml: " + this.props.rctData.isHtml);
    if ( this.props.rctData.isHtml === true ) {
      console.log(data);
    } else {
      for ( var i = 0; i < data.length; i++ ) {
        if ( level === 0 ) {
          arrJsx.push( <h1>{ data[ i ].title }</h1> );
        } else if ( level === 1 ) {
          arrJsx.push( <h2>{ data[ i ].title }</h2> );
        } else if ( level === 2 ) {
          arrJsx.push( <h3>{ data[ i ].title }</h3> );
        } else if ( level === 3 ) {
          arrJsx.push( <h4>{ data[ i ].title }</h4> );
        } else {
          arrJsx.push( <p>{ data[ i ].title }</p> );
        }
      for ( var j = 0; j < data[ i ].content.length; j++ ) {
        //console.log ( data[ i ].content[ j ] );
        var line = [];
        for ( var k = 0; k < data[ i ].content[ j ].length; k++ ) {
          if ( data[ i ].content[ j ][ k ].startsWith( "{`" ) === true ) {
            var strTex = data[ i ].content[ j ][ k ];
            //console.log( strTex );
            strTex = strTex.substr( 2, strTex.length - 4 )
            //console.log( strTex );
            line.push( <MathJax.Context><MathJax.Node>{ strTex }</MathJax.Node></MathJax.Context> )
          } else {
            line.push( <span>{ data[ i ].content[ j ][ k ] }</span> )
          }
        }
        arrJsx.push( <div>{ line }</div> );
      }
        if ( data[ i ].subsections.length > 0 ) {
          level++ 
          this.buildJsx( data[ i ].subsections, arrJsx, level );
        }
      }
    }
    return arrJsx;
  }
  render() {
    console.log( "RctFormula.render()" );
    console.log( this.state.arrJsx );
    console.log("this.props:");
    console.log(this.props);
    console.log("this.props.rctData.isHtml: " + this.props.rctData.isHtml );
    return (
      <div className="RctFormula">
        { this.state.arrJsx }
      </div>
    );
  }
}

export default RctFormula;