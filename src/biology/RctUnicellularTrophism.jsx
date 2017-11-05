import React from "react";

class RctUnicellularTrophism extends React.Component {
	render() {
		return (
			<div className="RctUnicellularTrophism">
				<h4>Energy Conservation from Catabolism</h4>
				<ul>
					<li>chemotroph: from chemicals</li>
					<ul>
						<li>chemoorganotroph: from organic chemicals</li>
						<li>chemolithotroph: from inorganic chemicals</li>
					</ul>
					<li>phototroph: from light</li>
					<ul>
						<li>oxygenic phototroph: produces O<sub>2</sub></li>
						<li>anoxygenic phototroph: doesn't produce O<sub>2</sub></li>
					</ul>
				</ul>
				<h4>Carbon Source</h4>
				<ul>
					<li>heterotroph: organic compounds</li>
					<li>autotroph: inorganic compounds</li>
				</ul>
			</div>
		);
	}

}

export default RctUnicellularTrophism;