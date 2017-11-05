import React from 'react';
import * as MathJax from 'react-mathjax';

class RctProbabilityMassFunction extends React.PureComponent {
  render() {
    return (
      <div className="RctProbabilityMassFunction">
      	<h1>Binomial distribution</h1>
      	<h2>Probability mass function</h2>
      	<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ P = \\frac{ n! p^k ( 1 - p )^{ n - k } }{ k! ( n - k )! } }`}
						</MathJax.Node>
					</MathJax.Context>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ P = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> probability of k successful attempts</span>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ n = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> quantity of attempts</span>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ p = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> probability per attempt</span>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ k = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> quantity of successful attempts</span>
				</div>
      </div>
    );
  }
}

export default RctProbabilityMassFunction;