import React from 'react';
import { useParams } from 'react-router-dom';
import { researchDetails } from '../data/researchDetails';
import '../styles/ResearchDetailPage.css';

const ResearchDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const patient = researchDetails.find((item) => item.id === id);

  if (!patient) return <div>Patient not found</div>;

  return (
    <div className="detail-container">
      <h2>{patient.name}</h2>
      <p>{patient.age} / {patient.gender}</p>

      <h3>Basic Information</h3>
      <div className="section">
        <div><strong>Organ Type:</strong> {patient.organType}</div>
        <div><strong>Organ Transplant Details:</strong> {patient.transplantType}</div>
        <div><strong>Patient ID:</strong> {patient.patientId}</div>
        <div><strong>Date of Assessment:</strong> {patient.date}</div>
      </div>

      <h3>Organ Transplant Details</h3>
      <div className="section">
        <div><strong>Organ Type:</strong> {patient.organType}</div>
        <div><strong>Risk Factors & Scores:</strong> <span className={`risk ${patient.riskLevel.toLowerCase()}`}>{patient.riskLevel}</span></div>
        <div><strong>Transplant Type:</strong> {patient.transplantType}</div>
        <div><strong>Rejection Risk:</strong> {patient.rejectionRisk}</div>
        <div><strong>Compatibility:</strong> {patient.compatibility}</div>
        <div><strong>Allergic/Immunological Reactions:</strong> {patient.allergyNote}</div>
      </div>

      <h3>Risk Factors & Scores</h3>
      <div className="section">
        <div><strong>Vital Signs:</strong> {patient.vitalSigns}</div>
        <div><strong>Vital Rate:</strong> {patient.vitalRate}</div>
        <div><strong>Lab Results:</strong> {patient.labResults}</div>
        <div><strong>Previous Episol:</strong> {patient.prevEpisol}</div>
      </div>

      <h3>Monitoring & History</h3>
      <div className="section">
        <div><strong>Doctor Notes:</strong> {patient.notes}</div>
        <div><strong>Scheduled:</strong> {patient.scheduled}</div>
      </div>
    </div>
  );
};

export default ResearchDetailPage;
