// frontend/src/components/PostTransplantTable.tsx
import React from "react";
import { PostTransplantPatient } from "../types/PatientTypes";

interface Props {
  patients: PostTransplantPatient[];
  title: string;
}

const PostTransplantTable: React.FC<Props> = ({ patients, title }) => (
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
          <th>Status OK</th>
          <th>Recovery</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>{p.comorbidities_score.toFixed(2)}</td>
            <td>{p.immuno_response_score.toFixed(2)}</td>
            <td>{p.infection_marker_level.toFixed(2)}</td>
            <td>{p.vitals_stable ? "✅" : "❌"}</td>
            <td>{p.post_status_ok ? "✅" : "❌"}</td>
            <td>{(p.recovery_score * 100).toFixed(0)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default PostTransplantTable;
