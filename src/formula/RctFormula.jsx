import React from 'react';
import * as MathJax from 'react-mathjax';

class RctFormula extends React.Component {
	constructor( props ) {
    console.log("RctFormula.constructor()");
		super( props );
	}
  componentWillReceiveProps( nextProps ){
    console.log("RctFormula.componentWillReceiveProps()");
    //console.log(nextProps.rctData.content);
    var data = nextProps.rctData.content
  }
  componentDidUpdate() {
    //console.log( "RctFormula.componentDidUpdate()" );
    //console.log( this.state.arrJsx );
  }
  buildStrHtml() {
    console.log("RctFormula.buildStrHtml()");
    var content = this.props.rctData.content;
    var strHtml = ""
    for ( var i = 0; i < content.length; i++ ){
      strHtml += content[ i ];
    }
    console.log("strHtml: " + strHtml);
    return strHtml;
  }
  buildJsx( content, arrJsx, level ) {
    console.log("RctFormula.buildJsx");
    //console.log("arrJsx:");
    console.log("content:");
    console.log(content);
    //console.log(arrJsx);
    //console.log(this.props);
    console.log("this.props.rctData.isHtml: " + this.props.rctData.isHtml);
    for ( var i = 0; i < content.length; i++ ) {
      if ( level === 0 ) {
        arrJsx.push( <h1>{ content[ i ].title }</h1> );
      } else if ( level === 1 ) {
        arrJsx.push( <h2>{ content[ i ].title }</h2> );
      } else if ( level === 2 ) {
        arrJsx.push( <h3>{ content[ i ].title }</h3> );
      } else if ( level === 3 ) {
        arrJsx.push( <h4>{ content[ i ].title }</h4> );
      } else {
        arrJsx.push( <p>{ content[ i ].title }</p> );
      }
    for ( var j = 0; j < content[ i ].content.length; j++ ) {
      //console.log ( content[ i ].content[ j ] );
      var line = [];
      for ( var k = 0; k < content[ i ].content[ j ].length; k++ ) {
        if ( content[ i ].content[ j ][ k ].startsWith( "{`" ) === true ) {
          var strTex = content[ i ].content[ j ][ k ];
          //console.log( strTex );
          strTex = strTex.substr( 2, strTex.length - 4 )
          //console.log( strTex );
          line.push( <MathJax.Context><MathJax.Node>{ strTex }</MathJax.Node></MathJax.Context> )
        } else {
          line.push( <span>{ content[ i ].content[ j ][ k ] }</span> )
        }
      }
      arrJsx.push( <div>{ line }</div> );
    }
      if ( content[ i ].subsections.length > 0 ) {
        level++ 
        this.buildJsx( content[ i ].subsections, arrJsx, level );
      }
    }
    return arrJsx;
  }
  render() {
    console.log( "RctFormula.render()" );
    //console.log( this.state.arrJsx );
    //console.log("this.props:");
    //console.log(this.props);
    console.log("this.props.rctData.isHtml: " + this.props.rctData.isHtml );
    if ( this.props.rctData.isHtml === true ) {
      return (
        <div className="RctFormula" dangerouslySetInnerHTML={{__html: this.buildStrHtml() }}/>
      )
    } else { 
      return (
        <div className="RctFormula">
          { this.buildJsx( this.props.rctData.content, [], 0  ) }
        </div>
      );
    }
  }
}

export default RctFormula;