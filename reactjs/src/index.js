import React from 'react';
import App from './App';
import "bulma/css/bulma.css";
import axios from 'axios';
import { createRoot } from 'react-dom/client';

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);