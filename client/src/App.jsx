import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Make sure react-router-dom is installed
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Dashboard />
    // <Routes>
    //   <Route path="/login" element={<Login />} />
    //   <Route
    //     path="/"
    //     element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
    //   />
    // </Routes>
  );
};

export default App;