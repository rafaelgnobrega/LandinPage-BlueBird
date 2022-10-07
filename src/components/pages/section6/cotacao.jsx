import React from 'react';
import './cotacao.css';


function Cotacao() {
    return (
        <div className="container6">
            <section>
                <div className="seguratexto">
                    <h1>Contate-nos</h1>
                    <p>Faça sua cotação</p>
                </div>
                <form action="https://formsubmit.co/bluebird.suporte@gmail.com" method="POST">
                    <div className="container-input">
                        <div className="esquerda">
                            <p>Nome completo</p>
                            <input type="text" id="name" name="Nome" placeholder="    Nome completo" required></input>
                            <p>Digite seu e-mail</p>
                            <input type="email" id="email" name="Email" placeholder="    Email" required></input>
                        </div>
                        <div className="direita" >
                            <p>Data de nascimento</p>
                            <input type="date" id="date" name="Data de Nascimento" placeholder="    Data de nascimento" required></input>
                            <p>Telefone</p>
                            <input type="text" id="telefone" name="Telefone" placeholder="    Digite seu telefone" required></input>
                        </div>
                    </div>
                    <button type='submit'>Solicitar cotação</button>
                    <input type="hidden" name="_subject" value="Solicitação de Cotação" />
                    <input type="hidden" name="_autoresponse" value="Nós da BlueBird recebemos a sua solicitação para realizar a cotação de seguros de seu veículo. Entraremos em contato com você dentro de 24 horas!"/>
                </form>
            </section>
        </div>
    )
}
export default Cotacao;
