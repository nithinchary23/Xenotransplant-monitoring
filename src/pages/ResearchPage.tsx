import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ResearchPage.css';

const researchData = [
  {
    id: '1',
    date: '03/10/2024',
    title: 'Allograft Rejection in Xenotransplantation',
    description: 'Analysis of allograft rejection mechanisms in xenotransplants',
  },
  {
    id: '2',
    date: '02/18/2024',
    title: 'Pig-to-Human Heart Transplantation',
    description: 'Case study on a pig-to-human heart transplantation procedure',
  },
  {
    id: '3',
    date: '01/05/2024',
    title: 'Immunosuppression Strategies',
    description: 'Evaluation of immunosuppressive therapies in xenotransplantation',
  },
  {
    id: '4',
    date: '12/12/2023',
    title: 'Long-Term Outcomes of Xenotransplants',
    description: 'Review of long-term outcomes and patient prognosis in xenotransplantation',
  },
];

const ResearchPage = () => {
  const navigate = useNavigate();

  return (
    <div className="research-page">
      <div className="header">
        <h2>Research History</h2>
        <input type="text" placeholder="🔍 Search" className="search-box" />
      </div>
      <table className="research-table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {researchData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.title}</td>
              <td>{entry.description}</td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => navigate(`/research/${entry.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="footer-text">Showing {researchData.length} of 23 results</p>
    </div>
  );
};

export default ResearchPage;
