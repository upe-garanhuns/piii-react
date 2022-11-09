import React from "react";
import "./App.css";
import Multicampi from "./multicampi.png";
import Brasao from "./brasao.png";
import cadeado from "./cadeado.png";
import menu from "./menu.png";
import { ReactComponent as Gerar } from "./gerar.svg";

const App = function () {
  return (
    <div id="principal">
      <header className="cabecalho">
        <div className="container-titulo">
          <h1 className="titulo">Gerador de Senhas</h1>
        </div>
        <div className="container-menu">
          <button>
            <img className="icone-menu" src={menu} alt="imagem-menu" />
          </button>
        </div>
      </header>
      <main className="conteudo">
        <div className="gerador-container">
          <div className="imagem-cadeado-container">
            <img src={cadeado} alt="imagem-cadeado" />
          </div>
          <div className="componentes">
            <div className="input">
              <div className="senha">gOPsIMXnlPPlCsl</div>
              <span className="classificacao classificacao-lg muito-forte">
                muito forte
              </span>
              <div className="botao-gerar-container">
                <a href="#" className="lnk-gerar">
                  <Gerar className="img-gerar" />
                </a>
              </div>
            </div>
            <div className="copiar">
              <a href="#" className="lnk-copiar">
                Copiar
              </a>
            </div>
            <div className="ajustes">
              <div className="tamanho">
                <label htmlFor="tamanh-definido" className="tamanho-label">
                  Tamanho da senha:{" "}
                </label>
                <span className="tamanho-definido">15</span>
                <button className="btn-senha">-</button>
                <input type="range" min="4" max="64" />
                <button className="btn-senha">+</button>
              </div>
              <div className="complexidade">
                <label className="texto-caracteres">
                  Caracteres utilizados:{" "}
                </label>
                <div className="check-caracteres">
                  <div className="check-opcao">
                    <input
                      type="checkbox"
                      id="maiuscula"
                      className="item-opcao"
                    />
                    <label htmlFor="maiuscula" className="item-opcao-label">
                      ABC
                    </label>
                  </div>
                  <div className="check-opcao">
                    <input
                      type="checkbox"
                      id="minuscula"
                      className="item-opcao"
                    />
                    <label htmlFor="minuscula" className="item-opcao-label">
                      abc
                    </label>
                  </div>
                  <div className="check-opcao">
                    <input
                      type="checkbox"
                      id="numeros"
                      className="item-opcao"
                    />
                    <label htmlFor="numeros" className="item-opcao-label">
                      123
                    </label>
                  </div>
                  <div className="check-opcao">
                    <input
                      type="checkbox"
                      id="especiais"
                      className="item-opcao"
                    />
                    <label htmlFor="especiais" className="item-opcao-label">
                      #$&*@
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="rodape">
        <div className="rodape-container">
          <div className="titulo-rodape-container">
            <span>Introdução ao React</span>
          </div>
          <div className="logo-container">
            <a title="Universidade de Pernambuco" href="http://www.upe.br">
              <img
                className="upe-logo"
                alt="Universidade de Pernambuco"
                src={Brasao}
              />
            </a>
            <a title="Multicampi Garanhuns" href="http://www.upe.br/garanhuns">
              <img
                className="multicampi-logo"
                alt="Multicampi Garanhuns"
                src={Multicampi}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
