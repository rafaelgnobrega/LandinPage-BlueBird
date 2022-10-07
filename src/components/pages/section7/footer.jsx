import React from 'react';
import './footer.css';
import Telefone from '../../image/telefone.svg';
import Email from '../../image/email.svg';
import Local from '../../image/local.svg';

function Footer() {
    return (
        <div className="container7">
            <section>
                <div className="contatos">
                    <h1>Entre em contato</h1>
                    <div className="container-contatos">
                        <div className="display-align">
                            <img src={Telefone} />
                            <a href="">(99) 9999-9999</a>
                        </div>
                        <div className="display-align">
                            <img src={Email} />
                            <a href="">bluebird.suporte@gmail.com</a>
                        </div>
                        <div className="display-align">
                            <img src={Local} />
                            <a href="">Rua Nabuco de Araújo 705</a>
                        </div>
                    </div>
                </div>
                <div className="botao">
                    <button><a href="#cotacao">Solicitar cotação</a></button>
                </div>
            </section>
        </div>
    );
}

export default Footer;