import React from 'react';
import './Seguros.css';

function Seguros() {
    return (
        <div className='container4'>
            <section>
                <h2>Coberturas</h2>
                <p className="coberturas">Com a <span>BlueBird</span> Seguros, você conta com as principais coberturas:</p>
                <div className="container-card">
                    <div className='segura-dupla'>
                        <div className="card1">
                            <p className="title">Incêndio</p>
                            <p className="tipo-seguro">Veículos em <br />chamas</p>
                        </div>
                        <div className="card2">
                            <p className="title">Colisão</p>
                            <p className="tipo-seguro">Colisão de <br />veículos</p>
                        </div>
                    </div>
                    <div className='segura-dupla2'>
                        <div className="card3">
                            <p className="title">Guincho</p>
                            <p className="tipo-seguro">Assistência com<br />Reboque</p>
                        </div>
                        <div className="card4">
                            <p className="title">Furto</p>
                            <p className="tipo-seguro">Seguro para<br />veículos roubados</p>
                        </div>
                    </div>
                </div>
                <h3>Entre <span className='negrito'>vááários</span> outros tipos</h3>
            </section>
        </div>
    );
}

export default Seguros;
