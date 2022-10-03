import React from 'react';
import './Beneficio.css';
import Mao from '../../image/mao.svg';
import Sorriso from '../../image/sorriso.svg';
import Dinheiro from '../../image/dinheiro.svg';

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
            <p>O processo é simples e, com as <br></br>coberturas adicionai, você deixa <br></br> tudo do seu jeito</p>
            </div>
          </div>
          <div className="Beneficio2">
            <img src={Sorriso} />
            <div className="texto2">
            <p className="titulo2">Qualidade no atendimento</p>
            <p>A BlueBird preza pela qualidade nos<br></br> serviços e atendimento!</p>
            </div>
          </div>
          <div className="Beneficio3">
            <img src={Dinheiro} />
            <div className="texto3">
            <p className="titulo3">Valores para você</p>
            <p>Oferecemos seguros simples com <br></br>coberturas essenciais, tornando os <br></br> preços mais acessíveis</p>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}

export default Beneficio;