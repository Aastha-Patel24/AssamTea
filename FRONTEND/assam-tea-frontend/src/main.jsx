
import React from 'react';
import ReactDOM from 'react-dom/client';
import { OrderProvider } from './context/OrderContext';
import { AuthProvider } from './context/AuthContext'; 
import './index.css'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
      <OrderProvider>
        <App />
      </OrderProvider>
    </AuthProvider>
  </React.StrictMode>
);




