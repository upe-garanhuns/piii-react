import React from 'react';
import './styles.css';
import Multicampi from '../../imagens/multicampi.png';
import Brasao from '../../imagens/brasao.png';

const Rodape = function () {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <div className="titulo-rodape-container">
          <span>Disciplina de Programação III ©</span>
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
  );
};

export default Rodape;
