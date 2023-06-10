import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from './context/apiContext';
import App from './App';
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> désactivé pour évité un double call api avec useEffect
  <ApiProvider>
    <App />
  </ApiProvider>
  // </React.StrictMode>
);

