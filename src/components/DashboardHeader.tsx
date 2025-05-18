// File: src/components/DashboardHeader.tsx
import React from 'react';
import '../styles/Dashboard.css';

export const DashboardHeader = () => (
  <header className="dashboard-header">
    <div>
      <h1>Xenotransplant Dashboard</h1>
      <p>Welcome back, Dr. Sarah Chen</p>
    </div>
    <input type="text" className="search-bar" placeholder="🔍 Search patients..." />
  </header>
);