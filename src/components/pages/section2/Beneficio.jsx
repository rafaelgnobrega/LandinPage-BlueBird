import React from 'react';
import './Beneficio.css';
import Mao from '../../image/mao.svg';

function Beneficio() {
  return (
    <div className="container2">

      <section>
        <h2>
          Por que contratar o seguro de automóvel da <span>BlueBird</span>?
        </h2>
        <div className="seguraBenecifio">
          <div className="Beneficio1">
            <img src={Mao} />
            <div className="texto">
            <p className="titulo">Contratação facilitada</p>
            <p>O processo é simples e, com as coberturas adicionai, você deixa tudo do seu jeito</p>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}

export default Beneficio;