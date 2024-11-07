// components/UserRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const UserRoute = () => {
  const isUser = true; // Logic for checking if the user is a regular user

  return isUser ? <Outlet /> : <Navigate to="/" />;
};

export default UserRoute;
