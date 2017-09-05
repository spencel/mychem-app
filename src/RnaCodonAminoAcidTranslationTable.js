import React, { Component } from 'react';
//import './AminoAcidTable.css';

class RnaCodonAminoAcidTranslationTable extends Component {

	render() {
		return (
			<div className="RnaCodonAminoAcidTranslationTable">
				<table>
					<caption>RNA Codon to Aminco Acid Translations</caption>
					<tbody>
						<tr>
							<th colSpan="10">Symol</th>
						</tr>
						<tr>
							<th>1st</th>
							<th colSpan="8">2nd</th>
							<th>3rd</th>
						</tr>
						<tr>
							<td className="empty"></td>
							<th colSpan="2">U</th>
							<th colSpan="2">C</th>
							<th colSpan="2">A</th>
							<th colSpan="2">G</th>
							<td className="empty"></td>
						</tr>
						<tr>
							<th rowSpan="4">U</th>
							<td>UUU</td>
							<td rowSpan="2">Phe</td>
							<td>UCU</td>
							<td rowSpan="4">Ser</td>
							<td>UAU</td>
							<td rowSpan="2">Tyr</td>
							<td>UGU</td>
							<td rowSpan="2">Cys</td>
							<th>U</th>
						</tr>
						<tr>
							<td>UUC</td>
							<td>UCC</td>
							<td>UAC</td>
							<td>UGC</td>
							<th>C</th>
						</tr>
						<tr>
							<td>UUA</td>
							<td rowSpan="6">Leu</td>
							<td>UCA</td>
							<td>UAA</td>
							<td rowSpan="2">Stop</td>
							<td>UGA</td>
							<td>Stop</td>
							<th>A</th>
						</tr>
						<tr>
							<td>UUG</td>
							<td>UCG</td>
							<td>UAG</td>
							<td>UGG</td>
							<td>Trp</td>
							<th>G</th>
						</tr>
						<tr>
							<th rowSpan="4">C</th>
							<td>CUU</td>
							<td>CCU</td>
							<td rowSpan="4">Pro</td>
							<td>CAU</td>
							<td rowSpan="2">His</td>
							<td>CGU</td>
							<td rowSpan="4">Arg</td>
							<th>U</th>
						</tr>
						<tr>
							<td>CUC</td>
							<td>CCC</td>
							<td>CAC</td>
							<td>CGC</td>
							<th>C</th>
						</tr>
						<tr>
							<td>CUA</td>
							<td>CCA</td>
							<td>CAA</td>
							<td rowSpan="2">Gln</td>
							<td>CGA</td>
							<th>A</th>
						</tr>
						<tr>
							<td>CUG</td>
							<td>CCG</td>
							<td>CAG</td>
							<td>CGG</td>
							<th>G</th>
						</tr>
						<tr>
							<th rowSpan="4">A</th>
							<td>AUU</td>
							<td rowSpan="3">Ile</td>
							<td>ACU</td>
							<td rowSpan="4">Thr</td>
							<td>AAU</td>
							<td rowSpan="2">Asn</td>
							<td>AGU</td>
							<td rowSpan="2">Ser</td>
							<th>U</th>
						</tr>
						<tr>
							<td>AUC</td>
							<td>ACC</td>
							<td>AAC</td>
							<td>AGC</td>
							<th>C</th>
						</tr>
						<tr>
							<td>AUA</td>
							<td>ACA</td>
							<td>AAA</td>
							<td rowSpan="2">Lys</td>
							<td>AGA</td>
							<td rowSpan="2">Arg</td>
							<th>A</th>
						</tr>
						<tr>
							<td>AUG</td>
							<td>Met</td>
							<td>ACG</td>
							<td>AAG</td>
							<td>AGG</td>
							<th>G</th>
						</tr>
						<tr>
							<th rowSpan="4">G</th>
							<td>GUU</td>
							<td rowSpan="4">Val</td>
							<td>GCU</td>
							<td rowSpan="4">Ala</td>
							<td>GAU</td>
							<td rowSpan="2">Asp</td>
							<td>GGU</td>
							<td rowSpan="4">Gly</td>
							<th>U</th>
						</tr>
						<tr>
							<td>GUC</td>
							<td>GCC</td>
							<td>GAC</td>
							<td>GGC</td>
							<th>C</th>
						</tr>
						<tr>
							<td>GUA</td>
							<td>GCA</td>
							<td>GAA</td>
							<td rowSpan="2">Glu</td>
							<td>GGA</td>
							<th>A</th>
						</tr>
						<tr>
							<td>GUG</td>
							<td>GCG</td>
							<td>GAG</td>
							<td>GGG</td>
							<th>G</th>
						</tr>
					</tbody>
				</table>				
			</div>
		);
	}

}

export default RnaCodonAminoAcidTranslationTable;