import React from 'react';
import * as MathJax from 'react-mathjax';

class RctBasicPureComponent extends React.PureComponent {
  render() {
    return (
      <div className="RctBasicPureComponent">
      	<h1>Poisson Distribution</h1>
      	<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ P = \\frac{ e^{ -\\lambda } \\lambda^k }{ k! } }`}
						</MathJax.Node>
					</MathJax.Context>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ P = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> observed probability</span>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ e = 2.71828 }`}
						</MathJax.Node>
					</MathJax.Context>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ \\lambda = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> true probability</span>
				</div>
				<div>
	      	<MathJax.Context>
						<MathJax.Node>
							{`\\rm{ k = }`}
						</MathJax.Node>
					</MathJax.Context>
					<span> quantity of observed events; an integer: 0, 1, 2...</span>
				</div>
      </div>
    );
  }
}

export default RctBasicPureComponent;