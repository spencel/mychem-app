import React, { Component } from 'react';
//import './AminoAcidTable.css';

class AminoAcidTable extends Component {

	// Class (Static) Properties
	static data = {
		Arginine: {
			name: "Arginine",
		},
	};

	render() {
		return (
			<div className="AminoAcidsTable">
				<table>
					<caption>Amino Acids</caption>
					<tbody>
						<tr>
							<th colSpan="2">Side Chain</th>
							<th>Name</th>
							<th>Abb.</th>
							<th>Sym.</th>
						</tr>
						<tr>
							<th rowSpan="9">Polar</th>
							<th rowSpan="3">Positive<br/>Charged</th>
							<td>{this.constructor.data.Arginine.name}</td>
							<td>Arg</td>
							<td>R</td>
						</tr>
						<tr>
							<td>Histidine</td>
							<td>His</td>
							<td>H</td>
						</tr>
						<tr>
							<td>Lysine</td>
							<td>Lys</td>
							<td>K</td>
						</tr>
						<tr>
							<th rowSpan="2">Negative<br/>Charged</th>
							<td>Aspartic Acid</td>
							<td>Asp</td>
							<td>D</td>
						</tr>
						<tr>
							<td>Glutamic Acid</td>
							<td>Glu</td>
							<td>E</td>
						</tr>
						<tr>
							<th rowSpan="4">Uncharged</th>
							<td>Serine</td>
							<td>Ser</td>
							<td>S</td>
						</tr>
						<tr>
							<td>Threonine</td>
							<td>Thr</td>
							<td>T</td>
						</tr>
						<tr>
							<td>Asparagine</td>
							<td>Asn</td>
							<td>N</td>
						</tr>
						<tr>
							<td>Glutamine</td>
							<td>Gln</td>
							<td>Q</td>
						</tr>
						<tr>
							<th rowSpan="8" colSpan="2">Nonpolar</th>
							<td>Alanine</td>
							<td>Ala</td>
							<td>A</td>
						</tr>
						<tr>
							<td>Valine</td>
							<td>Val</td>
							<td>V</td>
						</tr>
						<tr>
							<td>Isoleucine</td>
							<td>Ile</td>
							<td>I</td>
						</tr>
						<tr>
							<td>Leucine</td>
							<td>Leu</td>
							<td>L</td>
						</tr>
						<tr>
							<td>Methionine</td>
							<td>Met</td>
							<td>M</td>
						</tr>
						<tr>
							<td>Phenylalanine</td>
							<td>Phe</td>
							<td>F</td>
						</tr>
						<tr>
							<td>Tyrosine</td>
							<td>Tyr</td>
							<td>Y</td>
						</tr>
						<tr>
							<td>Tryptophan</td>
							<td>Trp</td>
							<td>W</td>
						</tr>
						<tr>
							<th rowSpan="4" colSpan="2">Special</th>
							<td>Cysteine</td>
							<td>Cys</td>
							<td>C</td>
						</tr>
						<tr>
							<td>Selenocysteien</td>
							<td>Sec</td>
							<td>U</td>
						</tr>
						<tr>
							<td>Glycine</td>
							<td>Gly</td>
							<td>G</td>
						</tr>
						<tr>
							<td>Proline</td>
							<td>Pro</td>
							<td>P</td>
						</tr>
					</tbody>
				</table>				
			</div>
		);
	}

}

export default AminoAcidTable;