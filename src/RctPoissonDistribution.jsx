import React from 'react';
import * as MathJax from 'react-mathjax';

class RctBasicPureComponent extends React.PureComponent {
  render() {
    return (
      <div className="RctBasicPureComponent">
      	<h1>Poisson Distribution</h1>
      	<MathJax.Context>
					<MathJax.Node>
						{`\\rm{\\Delta G^{0\\prime}=\\text{ Gibbs Free Energy (aka Gibbs Energy, Gibbs Function, and Free Enthalpy)}\\\\
						\\text{Example: }\\Delta G^{0\\prime}=G_f^0[C+D]-G_f^0[A+B]}`}
					</MathJax.Node>
				</MathJax.Context>
      </div>
    );
  }
}

export default RctBasicPureComponent;