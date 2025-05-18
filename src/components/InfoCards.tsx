// File: src/components/InfoCards.tsx
import React from 'react';
import '../styles/Dashboard.css';

const cards = [
  { title: 'Pre-Transplant Patients', value: 82, change: '+12%', icon: '👤' },
  { title: 'Post-Transplant Monitoring', value: 112, change: '+8%', icon: '📉' },
  { title: 'Success Rate', value: '76%', change: '+4%', icon: '📊' },
  { title: 'Model Accuracy', value: '82%', change: '+1.2%', icon: '📈' },
];

export const InfoCards = () => (
  <section className="info-cards">
    {cards.map((card, idx) => (
      <div className="card" key={idx}>
        <div className="card-icon">{card.icon}</div>
        <div className="card-info">
          <h4>{card.title}</h4>
          <p className="value">{card.value}</p>
          <p className="change">⬆ {card.change} from last month</p>
        </div>
      </div>
    ))}
  </section>
);
