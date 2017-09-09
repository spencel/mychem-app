import React, { Component } from 'react';
import * as MathJax from 'react-mathjax';
//import './GibbsEnergy.css';

class ComGibbsEnergy extends Component {

	constructor( props ) {
		super( props );
		this.state = {
		};
	}

	render() {
		return (
			<div className="ComGibbsEnergy">
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

export default ComGibbsEnergy;