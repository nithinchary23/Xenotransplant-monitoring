// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">🧠 XenoCare</h2>
        <p className="sidebar-sub">Xenotransplant Monitoring</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className={isActive('/dashboard') ? 'active' : ''}>
            <Link to="/dashboard">📊 Dashboard</Link>
          </li>
          <li className={isActive('/patients') ? 'active' : ''}>
            <Link to="/patients">👥 Patients</Link>
          </li>
          <li className={isActive('/analytics') ? 'active' : ''}>
            <Link to="/analytics">📈 Analytics</Link>
          </li>
          <li className={isActive('/inventory') ? 'active' : ''}>
            <Link to="/inventory">🧬 Organ Inventory</Link>
          </li>

          <li className="sidebar-section">MANAGEMENT</li>

          <li className={isActive('/research') ? 'active' : ''}>
            <Link to="/research">📚 Research Data</Link>
          </li>
          <li className={isActive('/history') ? 'active' : ''}>
            <Link to="/history">📝 Procedure History</Link>
          </li>
          <li className={isActive('/settings') ? 'active' : ''}>
            <Link to="/settings">⚙️ Settings</Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <img
          src="/images/sarah chen doc.png"
          alt="Dr. Sarah Chen"
          className="avatar"
        />
        <div className="sidebar-user-info">
          <div className="user-name">Dr. Sarah Chen</div>
          <div className="user-role">Transplant Specialist</div>
        </div>
      </div>
    </aside>
  );
};
