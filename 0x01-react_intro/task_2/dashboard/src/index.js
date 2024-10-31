import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Notifications } from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
const notifications = ReactDOM.createRoot(document.getElementById('root-notifications'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

notifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
)

reportWebVitals();
