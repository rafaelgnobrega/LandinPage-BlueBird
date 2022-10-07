import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/pages/section1/App';
import Beneficio from './components/pages/section2/Beneficio';
import Chat from './components/pages/section3/Chat';
import Seguros from './components/pages/section4/Seguros';
import Preco from './components/pages/section5/preco';
import Cotacao from './components/pages/section6/cotacao';
import Footer from './components/pages/section7/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Beneficio />
    <Chat />
    <Seguros />
    <Preco />
    <Cotacao />
    <Footer />
   </React.StrictMode>
);

