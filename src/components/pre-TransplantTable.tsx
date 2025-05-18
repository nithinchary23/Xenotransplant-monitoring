import React from "react";
import { PreTransplantPatient } from "../types/PatientTypes";

interface Props {
  patients: PreTransplantPatient[];
  title: string;
}

const PreTransplantTable: React.FC<Props> = ({ patients, title }) => (
  <section>
    <h2>{title} ({patients.length})</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Comorbidities</th>
          <th>Immuno Score</th>
          <th>Infection Level</th>
          <th>Vitals Stable</th>
          <th>Pre-Op Safe</th>
          <th>Recovery</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>{!isNaN(p.comorbidities_score) ? p.comorbidities_score.toFixed(2) : "N/A"}</td>
            <td>{!isNaN(p.immuno_response_score) ? p.immuno_response_score.toFixed(2) : "N/A"}</td>
            <td>{!isNaN(p.infection_marker_level) ? p.infection_marker_level.toFixed(2) : "N/A"}</td>
            <td>{p.vitals_stable ? "✅" : "❌"}</td>
            <td>{p.pre_op_safe ? "✅" : "❌"}</td>
            <td>{!isNaN(p.recovery_score) ? (p.recovery_score * 100).toFixed(0) : "N/A"}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default PreTransplantTable;
