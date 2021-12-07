import React from 'react';
import './styles.css';
import menu from '../../imagens/menu.png';

const Cabecalho = function () {
  return (
    <header className="cabecalho">
      <div className="container-titulo">
        <h1 className="titulo">Gerador de Senhas</h1>
      </div>
      <div className="container-menu">
        <button type="button">
          <img className="icone-menu" src={menu} alt="imagem-menu" />
        </button>
      </div>
    </header>
  );
};

export default Cabecalho;
