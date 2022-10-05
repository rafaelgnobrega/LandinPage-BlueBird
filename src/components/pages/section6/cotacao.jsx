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

                <form>
                    <div className="container-input">
                        <div className="esquerda">
                            <input type="text" id="name" name="name" placeholder="    Nome completo" ></input>
                            <input type="text" id="date" name="date" placeholder="    Data de nascimento" ></input>
                            <input type="text" id="endereco" name="endereco" placeholder="    Endereço completo" ></input>
                            <input type="text" id="model" name="model" placeholder="    Modelo do veiculo" ></input>
                            <input type="text" id="datev" name="datev" placeholder="    Ano do veiculo" ></input>
                        </div>
                        <div className="direita" >
                            <input type="email" id="email" name="email" placeholder="    Email" ></input>
                            <input type="number" id="cpf" name="cpf" placeholder="    CPF" ></input>
                            <input type="text" id="placa" name="placa" placeholder="    Placa do veiculo" ></input>
                            <input type="text" id="marca" name="marca" placeholder="    Marca do veiculo" ></input>
                            <input type="number" id="km" name="km" placeholder="    Quilometragem" ></input>
                        </div>
                    </div>
                    <input type="text" className="areatexto" id="descricao" name="descricao" placeholder="                                                          Descrição de ultilização de veiculo" ></input>
                </form>

                <button>Realizar cotação</button>
            </section>
        </div>
    )
}
export default Cotacao;
