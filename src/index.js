import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartContextProvider } from './store/cart-context';
import { ShirtContextProvider } from './store/shirt-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <ShirtContextProvider>
        <App />
      </ShirtContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
