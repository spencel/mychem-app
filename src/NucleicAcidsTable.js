import React, { Component } from 'react';
//import './NucleicAcidsTable.css';

class NucleicAcidsTable extends Component {

	render() {
		return (
			<div className="NucleicAcidsTable">
				<table>
					<caption>Nucleic Acids</caption>
					<tbody>
						<tr>
							<th colSpan="2">Nucleobases</th>
						</tr>
						<tr>
							<th>Purines</th>
							<th>Pyrimidines</th>
						</tr>
						<tr>
							<td>Adenine</td>
							<td>Thymine</td>
						</tr>
						<tr>
							<td>Guanine</td>
							<td>Cytosine</td>
						</tr>
						<tr>
							<td className="empty"></td>
							<td>Uracil</td>
						</tr>
						<tr>
							<th colSpan="2">Nucleosides</th>
						</tr>
						<tr>
							<th colSpan="2">• Nucleobase + Ribose (RNA)</th>
						</tr>
						<tr>
							<td>Adenosine (A)</td>
							<td>Uridine (U)</td>
						</tr>
						<tr>
							<td>Guanosine (G)</td>
							<td>Cytidine (C)</td>
						</tr>
						<tr>
							<th colSpan="2">• Nucleobase + Deoxyribose (DNA)</th>
						</tr>
						<tr>
							<td>Deoxyadenosine (dA)</td>
							<td>Deoxythymidine (dT)</td>
						</tr>
						<tr>
							<td>Deoxyguanosine (dG)</td>
							<td>Deoxycytidine (dC)</td>
						</tr>
						<tr>
							<th colSpan="2">Nucleotides<br/>(nucleoside + 1 to 3 chained phosphate groups)</th>
						</tr>
						<tr>
							<th colSpan="2">• RNA (ribonucleic acid)</th>
						</tr>
						<tr>
							<td>Adenosine monophosphate (AMP)</td>
							<td>Uridine monophosphate (UMP)</td>
						</tr>
						<tr>
							<td>Adenosine diphosphate (ADP)</td>
							<td>Uridine diphosphate (UDP)</td>
						</tr>
						<tr>
							<td>Adenosine triphosphate (ATP)</td>
							<td>Uridine triphosphate (UTP)</td>
						</tr>
						<tr>
							<td>Guanosine monophosphate (GMP)</td>
							<td>Cytidine monophosphate (CMP)</td>
						</tr>
						<tr>
							<td>Guanosine diphosphate (GDP)</td>
							<td>Cytidine diphosphate (CDP)</td>
						</tr>
						<tr>
							<td>Guanosine triphosphate (GTP)</td>
							<td>Cytidine triphosphate (CTP)</td>
						</tr>
						<tr>
							<th colSpan="2">• DNA (deoxyribonucleic acid)</th>
						</tr>
						<tr>
							<td>Deoxyadenosine monophosphate (dAMP)</td>
							<td>Deoxyuridine monophosphate (dUMP)</td>
						</tr>
						<tr>
							<td>Deoxyadenosine diphosphate (dADP)</td>
							<td>Deoxyuridine diphosphate (dUDP)</td>
						</tr>
						<tr>
							<td>Deoxyadenosine triphosphate (dATP)</td>
							<td>Deoxyuridine triphosphate (dUTP)</td>
						</tr>
						<tr>
							<td>Deoxyguanosine monophosphate (dGMP)</td>
							<td>Deoxycytidine monophosphate (dCMP)</td>
						</tr>
						<tr>
							<td>Deoxyguanosine diphosphate (dGDP)</td>
							<td>Deoxycytidine diphosphate (dCDP)</td>
						</tr>
						<tr>
							<td>Deoxyguanosine triphosphate (dGTP)</td>
							<td>Deoxycytidine triphosphate (dCTP)</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}

}

export default NucleicAcidsTable;