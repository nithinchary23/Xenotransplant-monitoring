// frontend/src/pages/DashboardPage.tsx
import React, { useState } from 'react';
import { Sidebar } from '../components/SideBar';
import { DashboardHeader } from '../components/DashboardHeader';
import { InfoCards } from '../components/InfoCards';
import { AddPatientForm } from '../components/AddPatientForm';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import '../styles/Dashboard.css';

const organCompatibilityData = [
  { organ: 'Heart', compatible: 78 },
  { organ: 'Kidney', compatible: 89 },
  { organ: 'Liver', compatible: 65 },
  { organ: 'Lung', compatible: 70 },
];

const transplantOutcomes = [
  { name: 'Successful', value: 7200 },
  { name: 'Rejection', value: 1800 },
  { name: 'Infection', value: 1000 },
];

const COLORS = ['#00C49F', '#FF8042', '#FFBB28'];

export default function DashboardPage() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <InfoCards />

        <div className="add-btn-container">
          <button className="add-btn" onClick={() => setShowAddForm(true)}>➕ Add Patient</button>
        </div>

        <div className="charts-grid">
          <div className="chart-box">
            <h3 className="chart-title">Organ Compatibility Rate</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={organCompatibilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="organ" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="compatible" fill="#8884d8" name="Compatibility %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h3 className="chart-title">Transplant Outcomes</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={transplantOutcomes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  dataKey="value"
                  nameKey="name"
                >
                  {transplantOutcomes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {showAddForm && (
        <AddPatientForm
          onClose={() => setShowAddForm(false)}
          onSuccess={() => console.log('Patient added.')}
        />
      )}
    </div>
  );
}
