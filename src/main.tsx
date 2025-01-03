/** @format */
import React from 'react';
import { createRoot } from 'react-dom/client';

import './css/style.scss';

import App from './components/App.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
