import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Register from './pages/register';
import Landingpage from './pages/landingpage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      }
    ],
  },
]);
