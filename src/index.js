import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShirtContextProvider } from './store/shirt-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShirtContextProvider>
      <App />
    </ShirtContextProvider>
  </React.StrictMode>
);
