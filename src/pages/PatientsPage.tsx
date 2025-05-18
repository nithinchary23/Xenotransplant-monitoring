import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/SideBar';
import { PreTransplantPatient, PostTransplantPatient } from '../types/PatientTypes';
import PreTransplantTable from '../components/pre-TransplantTable';
import PostTransplantTable from '../components/PostTransplantTable';
import { fetchPreTransplantPatients, fetchPostTransplantPatients } from '../services/patientService';
import '../styles/Dashboard.css';

export default function PatientsPage() {
  const [preTransplantPatients, setPreTransplantPatients] = useState<PreTransplantPatient[]>([]);
  const [postTransplantPatients, setPostTransplantPatients] = useState<PostTransplantPatient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const pre = await fetchPreTransplantPatients();
        const post = await fetchPostTransplantPatients();
        setPreTransplantPatients(pre);
        setPostTransplantPatients(post);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch patient data.");
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <h1 className="page-title">Patient List</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <>
            <PreTransplantTable patients={preTransplantPatients} title="Pre-Transplant Patients" />
            <PostTransplantTable patients={postTransplantPatients} title="Post-Transplant Patients" />
          </>
        )}
      </div>
    </div>
  );
}
