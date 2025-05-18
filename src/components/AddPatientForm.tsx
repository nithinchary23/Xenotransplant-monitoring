// frontend/src/components/AddPatientForm.tsx
import React, { useState } from 'react';
import '../styles/Dashboard.css';

interface AddPatientFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const AddPatientForm: React.FC<AddPatientFormProps> = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    organType: '',
    compatibility: '',
    infectionRisk: '',
    overallSafety: '',
    status: 'pre-transplant',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      compatibility: Number(formData.compatibility),
      infectionRisk: Number(formData.infectionRisk),
      overallSafety: Number(formData.overallSafety),
    };

    try {
      const endpoint = 'http://localhost:4000/api/patients/add-pre-transplant';


      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to add patient');

      alert('✅ Patient added successfully');
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert('❌ Error adding patient');
    }
  };

  return (
    <div className="add-patient-modal">
      <div className="form-box">
        <h2>Add New Patient</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Patient Name" value={formData.name} onChange={handleChange} required />
          <input name="organType" placeholder="Organ Type" value={formData.organType} onChange={handleChange} required />
          <input name="compatibility" placeholder="Compatibility (%)" type="number" value={formData.compatibility} onChange={handleChange} required />
          <input name="infectionRisk" placeholder="Infection Risk (%)" type="number" value={formData.infectionRisk} onChange={handleChange} required />
          <input name="overallSafety" placeholder="Overall Safety (%)" type="number" value={formData.overallSafety} onChange={handleChange} required />
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="pre-transplant">Pre-Transplant</option>
            <option value="post-transplant">Post-Transplant</option>
          </select>
          <div className="form-actions">
            <button type="submit">Add Patient</button>
            <button type="button" className="cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
