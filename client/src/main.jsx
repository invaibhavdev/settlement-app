import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { AuthContext, AuthProvider } from './context/AuthContext';
import Layout from './components/base/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import "./index.css";
import InitiatorDashboard from "./components/InitiatorDashboard";
import ResponderDashboard from "./components/ResponderDashboard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    // loader: () => {
    //   const { isAuthenticated } = useContext(AuthContext);
    //   if (!isAuthenticated) {
    //     return redirect('/login'); 
    //   }
    //   return null; 
    // },
    children: [ 
      {
        path: '/', 
        element: <Dashboard />,
        // loader: dashboardLoader, 
      },
      // ... other protected routes
    ],
  },
  {
    path: '/initiator', 
    element: <Layout><InitiatorDashboard /></Layout>,
    // loader: dashboardLoader, 
  },
  {
    path: '/responder', 
    element: <Layout><ResponderDashboard /></Layout>,
    // loader: dashboardLoader, 
  },
  {
    path: '/login',
    element: <Login />, 
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

