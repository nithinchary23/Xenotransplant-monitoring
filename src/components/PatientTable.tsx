// frontend/src/components/PatientTable.tsx
import React from 'react';
import '../styles/Dashboard.css';

export interface Patient {
  id: string;
  name: string;
  organType: string;
  compatibility: number;
  infectionRisk: number;
  overallSafety: number;
  status: 'pre-transplant' | 'post-transplant';
}

interface PatientTableProps {
  patients: Patient[];
  title: string;
}

export const PatientTable: React.FC<PatientTableProps> = ({ patients, title }) => (
  <section>
    <h2>{title} ({patients.length})</h2>
    <table className="patient-table">
      <thead>
        <tr>
          <th>Patient</th>
          <th>Organ Type</th>
          <th>Compatibility</th>
          <th>Infection Risk</th>
          <th>Overall Safety</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {patients.length === 0 ? (
          <tr>
            <td colSpan={6} className="no-data">No patients found</td>
          </tr>
        ) : (
          patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.organType}</td>
              <td>{patient.compatibility}%</td>
              <td>{patient.infectionRisk}%</td>
              <td>{patient.overallSafety}%</td>
              <td><button>View</button></td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </section>
);
