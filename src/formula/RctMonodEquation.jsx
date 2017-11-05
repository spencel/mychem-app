import React from 'react';
import * as MathJax from 'react-mathjax';

class RctProbabilityMassFunction extends React.PureComponent {
  render() {
    return (
      <div className="RctProbabilityMassFunction">
      	<h1>Monod equation</h1>
      	<h4>Single substrate or noninteractive limiting substrate</h4>
      	<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ \\mu = \\frac{ \\mu_{ max } S }{ K_S + S } }`}
						</MathJax.Node>
					</MathJax.Context>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ K_S = \\frac{ \\mu }{ \\mu_{ max } } }`}
						</MathJax.Node>
					</MathJax.Context>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ \\mu = min[ \\mu_1, \\mu_2, ... ] = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> [minimum] specific microbe growth rate</span>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ \\mu_{ max } = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> maximum specific microbe growth rate</span>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ S = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> limiting substrate concentration</span>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ K_S = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> half-velocity constant</span>
					<h4>Multiple interactive substrates</h4>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ \\mu = \\frac{ \\mu_{ max } S_1 }{ K_{ S_{ 1 } } + S_1 } \\frac{ \\mu_{ max } S_2 }{ K_{ S_{ 2 } } + S_2 } ... }`}
						</MathJax.Node>
					</MathJax.Context>
				</div>
      </div>
    );
  }
}

export default RctProbabilityMassFunction;