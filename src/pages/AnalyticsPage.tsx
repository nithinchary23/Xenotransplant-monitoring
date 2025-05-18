import React from 'react';
import '../styles/AnalyticsPage.css';

const AnalyticsPage = () => {
  const analyticsData = [
    { metric: 'Successful Transplants', value: 187, trend: '+8%' },
    { metric: 'Rejection Cases', value: 23, trend: '-3%' },
    { metric: 'Avg. Compatibility Score', value: '92.5%', trend: '+1.5%' },
    { metric: 'Post-Op Stability Rate', value: '88%', trend: '+2.1%' },
  ];

  return (
    <div className="analytics-page">
      <h2>Analytics Dashboard</h2>
      <div className="analytics-grid">
        {analyticsData.map((item, index) => (
          <div className="analytics-card" key={index}>
            <h3>{item.metric}</h3>
            <p className="value">{item.value}</p>
            <span className="trend">{item.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPage;
