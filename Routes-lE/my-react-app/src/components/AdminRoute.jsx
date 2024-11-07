// components/AdminRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const isAdmin = true; // Logic for checking if the user is an admin

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
