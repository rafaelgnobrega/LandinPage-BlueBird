import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/pages/section1/App';
import Beneficio from './components/pages/section2/Beneficio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Beneficio />
  </React.StrictMode>
);

