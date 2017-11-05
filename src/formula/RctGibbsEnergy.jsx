import React from 'react';
import * as MathJax from 'react-mathjax';

class RctGibbsEnergy extends React.PureComponent {
	render() {
		return (
			<div className="RctGibbsEnergy">
				<h1>Gibbs Energy</h1>
				<div>Syn.: Gibbs free energy; Gibbs function; free enthalpy.</div>
				<div>
					<MathJax.Context>
						<MathJax.Node>
							{`\\rm{\\Delta G^{0\\prime}=G_f^0[C+D]-G_f^0[A+B]}`}
						</MathJax.Node>
					</MathJax.Context>
				</div>
				<div>
					<MathJax.Context>
						<MathJax.Node>
							{`\\rm{\\Delta G^{0\\prime}=}`}
						</MathJax.Node>
					</MathJax.Context>
					<span> Gibbs energy </span>
				</div>
			</div>
		);
	}
}

export default RctGibbsEnergy;