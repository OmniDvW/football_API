import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from './context/apiContext';
import App from './App';
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

