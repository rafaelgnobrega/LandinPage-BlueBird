import React from 'react';
import './Seguros.css';

function Seguros() {
  return (
    <div className='container4'>
        <section>
            <h2>Coberturas</h2>
            <p className="coberturas">Com a <span>BlueBird</span> Seguros, você conta com as principais coberturas:</p>
            <div className="container-card">
                <div className="card1">
                    <p className="title">Incêndio</p>
                    <p className="tipo-seguro">Veículos em <br />chamas</p>
                </div>
            </div>
            <h3>Entre <span className='negrito'>vááários</span> outros tipos</h3>
        </section>
    </div>
  );
}

export default Seguros;
