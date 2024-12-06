import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './assets/css/style.css'; // Importing custom styles
import '@fortawesome/fontawesome-free/css/all.min.css';


// React DOM render method
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measurement (optional, based on your project requirements)
if (process.env.NODE_ENV === 'development') {
  import('./reportWebVitals').then(({ default: reportWebVitals }) => {
    reportWebVitals(console.log);
  });
}
