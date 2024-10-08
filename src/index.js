import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import DashboardPage from './pages/DashboardPage';
import ClientFormPage from './pages/ClientFormPage';
import TenantsFormPage from './pages/TenantsSurvey';
import ProtectedRoute from './components/ProtectedRoute'; 
import SubmitClientForm from './pages/SubmitClientForm';
import SubmitTenantForm from './pages/SubmitTenantForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/ClientSurvey/:clientId',
    element: (
      <ProtectedRoute>
        <ClientFormPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/TenantsSurvey/:tenantId',
    element: (
      <ProtectedRoute>
        <TenantsFormPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/SubmitClientForm',
    element: (
    
        <SubmitClientForm />
  
    ),
  },

  {
    path: '/SubmitTenantForm',
    element: (

        <SubmitTenantForm />

    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
