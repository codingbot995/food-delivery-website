import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import  StoreContextProvider  from './components/context/StoreContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
         <App />
    </StoreContextProvider>
  </React.StrictMode>
);