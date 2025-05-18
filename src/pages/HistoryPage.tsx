import React from 'react';
import '../styles/HistoryPage.css';

const historyEntries = [
  {
    date: '2024-04-04',
    activity: 'Doctor Jane Doe reviewed patient #5467 (post-transplant).',
  },
  {
    date: '2024-03-29',
    activity: 'Model retrained with updated dataset of 10,000 records.',
  },
  {
    date: '2024-03-15',
    activity: 'Patient #123456 marked as stable after 30-day post-transplant period.',
  },
  {
    date: '2024-03-10',
    activity: 'Research document uploaded: "Xenograft Immuno Evaluation 2024"',
  },
];

const HistoryPage = () => {
  return (
    <div className="history-page">
      <h2>System Activity History</h2>
      <ul className="history-list">
        {historyEntries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.date}</strong>: {entry.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
