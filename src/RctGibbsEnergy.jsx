import React from 'react';
import * as MathJax from 'react-mathjax';

class RctGibbsEnergy extends React.PureComponent {
	render() {
		return (
			<div className="RctGibbsEnergy">
				<h1>Gibbs Energy</h1>
				<MathJax.Context>
					<MathJax.Node>
						{`\\rm{\\Delta G^{0\\prime}=\\text{ Gibbs energy (syn.: Gibbs free energy; Gibbs function; free enthalpy)}\\\\
						\\text{Example: }\\Delta G^{0\\prime}=G_f^0[C+D]-G_f^0[A+B]}`}
					</MathJax.Node>
				</MathJax.Context>
			</div>
		);
	}
}

export default RctGibbsEnergy;