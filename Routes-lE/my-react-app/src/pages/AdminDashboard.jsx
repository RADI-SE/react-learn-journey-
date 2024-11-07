// pages/AdminDashboard.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="users">Manage Users</Link></li>
          <li><Link to="orders">Manage Orders</Link></li>
          <li><Link to="settings">Admin Settings</Link></li>
        </ul>
      </nav>

      {/* Outlet renders the nested route components */}
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
