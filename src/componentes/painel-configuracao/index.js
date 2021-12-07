import React from 'react';
import './styles.css';
import cadeado from '../../imagens/cadeado.png';
import { ReactComponent as Gerar } from '../../imagens/gerar.svg';

const PainelConfiguracao = function () {
  return (
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
            <a href="_blank" className="lnk-gerar">
              <Gerar className="img-gerar" />
            </a>
          </div>
        </div>
        <div className="copiar">
          <a href="_blank" className="lnk-copiar">
            Copiar
          </a>
        </div>
        <div className="ajustes">
          <div className="tamanho">
            <span className="tamanho-label">Tamanho da senha:</span>
            <span className="tamanho-definido">15</span>
            <button type="button" className="btn-senha">
              -
            </button>
            <input type="range" min="4" max="64" />
            <button type="button" className="btn-senha">
              +
            </button>
          </div>
          <div className="complexidade">
            <span className="texto-caracteres">Caracteres utilizados:</span>
            <div className="check-caracteres">
              <div className="check-opcao">
                <label htmlFor="maiuscula" className="item-opcao-label">
                  ABC
                  <input
                    type="checkbox"
                    id="maiuscula"
                    className="item-opcao"
                  />
                </label>
              </div>
              <div className="check-opcao">
                <label htmlFor="minuscula" className="item-opcao-label">
                  <input
                    type="checkbox"
                    id="minuscula"
                    className="item-opcao"
                  />
                  abc
                </label>
              </div>
              <div className="check-opcao">
                <label htmlFor="numeros" className="item-opcao-label">
                  <input type="checkbox" id="numeros" className="item-opcao" />
                  123
                </label>
              </div>
              <div className="check-opcao">
                <label htmlFor="especiais" className="item-opcao-label">
                  <input
                    type="checkbox"
                    id="especiais"
                    className="item-opcao"
                  />
                  !@#$%*()_+
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelConfiguracao;
