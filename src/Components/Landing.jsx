import React, {} from 'react';
import Typist from 'react-typist';

import './Styles/Landing.css';
import Cart from './Vectors/Cart';
import AddCart from './Vectors/AddCart';
import ChatBegin from './Vectors/ChatBegin';
import Login from './Vectors/Login';
import logo from '../logo.png';

function Landing() {
    return (
        <div className="landing">
            <div className="landing-header">
                <img src={logo} alt="SunValley Logo"/>
                <h1>Bem vindo a <span className="landing-title wrapper">SunValley Store</span>.</h1>
                <div className='paragraph'><Typist>A loja de serviços digitais mais barata do Brasil! <span role='img' aria-label='carrinho de supermercado'>🛒</span></Typist></div>
                <div className="custom-shape-divider-bottom-1644066616">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="landing-content">
                <div className="container">
                    <div className="landing-content-item row">
                        <div className="text col-12 col-sm-6">
                            <h2>Entre ou Cadastre-se</h2>
                            <p>Entre ou crie sua conta pra começar, é facil, não lhe gastará nem 1 minuto.</p>
                            <div className="d-flex w-100">
                            <a href='/entrar' className="button fancy-border-radius">Entrar</a>
                            <a href='/entrar' className="button fancy-border-radius">Cadastrar</a>
                            </div>
                        </div>
                        <div className="image col-12 col-sm-6">
                            <Login />
                        </div>
                    </div>
                    <div className="landing-content-item row">
                        <div className="image col-12 col-sm-6">
                            <AddCart />
                        </div>
                        <div className="text col-12 col-sm-6">
                            <h2>Escolha os Produtos</h2>
                            <p>Veja os produtos e monte seu carrinho, há diversos produtos por preços exclusivos.</p>
                            <a href='/produtos' className="button fancy-border-radius">Produtos</a>
                        </div>
                    </div>
                    <div className="landing-content-item row">
                        <div className="image col-12 col-sm-6">
                            <Cart />
                        </div>
                        <div className="text col-12 col-sm-6">
                            <h2>Confira seu Carrinho</h2>
                            <p>Confirme se está tudo ok, se for o que quer comprar, finalize seu pedido!</p>
                            <a href='/carrinho' className="button fancy-border-radius">Carrinho</a>
                        </div>
                    </div>
                    <div className="landing-content-item row">
                        <div className="text col-12 col-sm-6">
                            <h2>Ainda tem dúvidas?</h2>
                            <p>Não hesite em nos contactar ou leia as dúvidas frequentes na página de ajuda.</p>
                            <a href='/ajuda' className="button fancy-border-radius">Ajuda</a>
                        </div>
                        <div className="image col-12 col-sm-6">
                            <ChatBegin />
                        </div>
                    </div>
                </div>
                <div className='payment-metods landing'>
                    <img src="https://i.imgur.com/apj1EAq.png" alt="metodos de pagamentos" />
                </div>
            </div>
        </div>
    );
}
export default Landing;