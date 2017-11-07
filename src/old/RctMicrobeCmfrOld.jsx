import React from 'react';
import * as MathJax from 'react-mathjax';

class RctMicrobeCmfr extends React.PureComponent {
  render() {
    return (
      <div className="RctMicrobeCmfr">
      	<h1>Microbe CMFR</h1>
      	<div class="cb">
	      	<h4>Flow</h4>
	      	<div>
		      	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ Q = Q_{ in } = Q_{ out } }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
					<div>
		      	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ Q = }`}
							</MathJax.Node>
						</MathJax.Context>
						<span> flow</span>
					</div>
					<div>
		      	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ Q_{ in } = }`}
							</MathJax.Node>
						</MathJax.Context>
						<span> flow into the reactor</span>
					</div>
					<div>
		      	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ Q_{ out } = }`}
							</MathJax.Node>
						</MathJax.Context>
						<span> flow out of the reactor</span>
					</div>
				</div>
				<div class="cb">
					<h4>Microbial mass balance</h4>
					<div>
			    	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ \\frac{dX}{dt}V = QX_0 - QX + r_{net}V }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
					<div>
			    	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ r_{net} = \\frac{ \\mu_{max}S_X }{ K_S + S } - bX }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
					<div>
						<span>If stead-state, then: </span>
			    	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ \\frac{dX}{dt} = 0 }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
					<div>
						<span>If </span>
						<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ \\frac{dX}{dt} = 0 }`}
							</MathJax.Node>
						</MathJax.Context>
						<span> and </span>
						<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ X_0 }`}
							</MathJax.Node>
						</MathJax.Context>
						<span> is negligible, then: </span>
						<div>
							<MathJax.Context>
								<MathJax.Node>
									{`\\rm{ r_{net} = \\frac{QX}{V} = \\frac{X}{\\theta} }`}
								</MathJax.Node>
							</MathJax.Context>
						</div>
					</div>
					<div>
						<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ \\frac{\\mu_{max}S}{k_g+S}-b = \\frac{r_{net}}{X} = \\frac{1}{\\theta} }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
				</div>
				<div class="cb">
					<h4>Substrate mass balance</h4>
					<div>
		      	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ \\frac{dS}{dt}V = QS_0 - QS + r_{ut}V }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
					<div>
						<span>If stead-state, then: </span>
		      	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ \\frac{dS}{dt} = 0 }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
					<div>
						<span>If in exponential phase:</span>
						<div>
			      	<MathJax.Context>
								<MathJax.Node>
									{`\\rm{ r_{ut} = -\\frac{ \\mu_{max}SX }{ Y(K_S + S) } = -\\frac{1}{Y} \\frac{dX}{dt} }`}
								</MathJax.Node>
							</MathJax.Context>
						</div>
					</div>
					<div>
						<span>If not in exponential phase:</span>
						<div>
			      	<MathJax.Context>
								<MathJax.Node>
									{`\\rm{ r_{ut} = -\\frac{1}{Y} \\left( \\frac{ \\mu_{max}S }{ (K_S + S) } - b \\right) }`}
								</MathJax.Node>
							</MathJax.Context>
						</div>
					</div>
					<div>
		      	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ QS = QS_0 - \\frac{\\mu_{max}SXV}{Y(K_S+S)} }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
					<div>
		      	<MathJax.Context>
							<MathJax.Node>
								{`\\rm{ X = \\frac{Y(S_0 - S)}{1 + \\theta b} }`}
							</MathJax.Node>
						</MathJax.Context>
					</div>
		    </div>
		  </div>
    );
  }
}

export default RctMicrobeCmfr;