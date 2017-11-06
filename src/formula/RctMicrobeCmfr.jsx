import React from 'react';
import * as MathJax from 'react-mathjax';

class RctMicrobeCmfr extends React.PureComponent {
	constructor( props ) {
		super( props );
    this.state = {
      arrJsx: RctMicrobeCmfr.buildJsx( props.rctData, [], 0 )
    };
	}
  static buildJsx( data, arrJsx, level ) {
    console.log( level );
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
      console.log ( data[ i ].content[ j ] );
      var line = [];
      for ( var k = 0; k < data[ i ].content[ j ].length; k++ ) {
        if ( data[ i ].content[ j ][ k ].startsWith( "{`" ) === true ) {
          var strTex = data[ i ].content[ j ][ k ];
          console.log( strTex );
          strTex = strTex.substr( 2, strTex.length - 4 )
          console.log( strTex );
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
    return arrJsx;
  }
  render() {
    return (
      <div className="RctMicrobeCmfr">
      	{ this.state.arrJsx }
		  </div>
    );
  }
}

export default RctMicrobeCmfr;