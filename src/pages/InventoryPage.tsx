// src/pages/InventoryPage.tsx
import React from 'react';
import { Sidebar } from '../components/SideBar';
import '../styles/Inventory.css';

const dummyInventory = [
  { organ: 'Heart', species: 'Pig', quantity: 3, status: 'Available' },
  { organ: 'Liver', species: 'Pig', quantity: 2, status: 'Low Stock' },
  { organ: 'Kidney', species: 'Baboon', quantity: 0, status: 'Out of Stock' },
  { organ: 'Lung', species: 'Pig', quantity: 4, status: 'Available' },
  { organ: 'Pancreas', species: 'Pig', quantity: 1, status: 'Low Stock' },
  { organ: 'Cornea', species: 'Pig', quantity: 0, status: 'Out of Stock' }
];

export default function InventoryPage() {
  const total = dummyInventory.reduce((sum, item) => sum + item.quantity, 0);
  const lowStock = dummyInventory.filter(i => i.status === 'Low Stock').length;
  const outOfStock = dummyInventory.filter(i => i.status === 'Out of Stock').length;

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <h1>Inventory</h1>
        <p>Dr. Sarah Chen</p>

        <table className="inventory-table">
          <thead>
            <tr>
              <th>Organ Type</th>
              <th>Species Source</th>
              <th>Quantity Available</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyInventory.map((item, idx) => (
              <tr key={idx}>
                <td>{item.organ}</td>
                <td>{item.species}</td>
                <td>{item.quantity > 0 ? item.quantity : '—'}</td>
                <td>
                  {item.status === 'Available' && <span className="status available">Available</span>}
                  {item.status === 'Low Stock' && <span className="status low">Low Stock</span>}
                  {item.status === 'Out of Stock' && <span className="status out">Out of Stock</span>}
                </td>
                <td>
                  <a href="#">View</a> &nbsp;
                  {item.status === 'Available' && <a href="#">Reserve</a>}
                  {item.status === 'Low Stock' && <a href="#">Order</a>}
                  {item.status === 'Out of Stock' && <a href="#">Notify</a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="inventory-summary">
          <p><strong>Total Organs Available:</strong> {total}</p>
          <p><strong>Organs Nearing Expiry:</strong> {lowStock}</p>
          <p><strong>Out of Stock Alerts:</strong> {outOfStock}</p>
          <p><em>Last Updated: Today at 10:24 AM</em></p>
        </div>
      </div>
    </div>
  );
}
