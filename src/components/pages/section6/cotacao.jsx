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
                        </div>
                        <div className="direita" >
                            <input type="text" id="date" name="date" placeholder="    Data de nascimento" ></input>
                        </div>
                    </div>
                    <input type="email" className='email' id="email" name="email" placeholder="    Email" ></input>
                </form>

                <button>Realizar cotação</button>
            </section>
        </div>
    )
}
export default Cotacao;
