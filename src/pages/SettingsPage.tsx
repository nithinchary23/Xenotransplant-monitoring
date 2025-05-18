import React, { useState } from 'react';
import '../styles/SettingsPage.css';

const SettingsPage = () => {
  const [name, setName] = useState('Dr. Sarah Chen');
  const [email, setEmail] = useState('admin@xenocare.com');
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    // Add logic for saving the settings (validation, API call, etc.)
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Settings saved:', { name, email, notifications, password });
  };

  return (
    <div className="settings-page">
      <h2 className="settings-title">Account Settings</h2>

      <form className="settings-form">
        <div className="settings-section">
          <label htmlFor="name" className="settings-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="settings-input"
          />
        </div>

        <div className="settings-section">
          <label htmlFor="email" className="settings-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="settings-input"
          />
        </div>

        <div className="settings-section">
          <label htmlFor="notifications" className="settings-label">
            Enable Email Notifications
          </label>
          <input
            id="notifications"
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="settings-checkbox"
          />
        </div>

        <div className="settings-section">
          <label htmlFor="password" className="settings-label">
            New Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="settings-input"
          />
        </div>

        <div className="settings-section">
          <label htmlFor="confirm-password" className="settings-label">
            Confirm New Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="settings-input"
          />
        </div>

        <button type="button" className="save-btn" onClick={handleSave}>
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
