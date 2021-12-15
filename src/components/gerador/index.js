import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css'
import {ReactComponent as Gerar} from '../../imagens/gerar.svg';
import cadeado from '../../imagens/cadeado.png';

export default function Gerador(props) {

  const [senha, setSenha] = useState('');

  const [configuracao, setConfiguracao] = useState({
    tamanho: 8,
    maiuscula: false,
    minuscula: false,
    numeros: false,
    especiais: false
  });

  const handleChangeTamanho = (valor) => {
    setConfiguracao( (configAnterior) => ({
      ...configAnterior,
      tamanho: parseInt(valor, 10)
    }));
  };

  const handleChangeMaiuscula = (valor) => {
    setConfiguracao( (configAnterior) => ({
      ...configAnterior,
      maiuscula: valor,
    }));
  };

  const handleChangeMinuscula = (valor) => {
    setConfiguracao( (configAnterior) => ({
      ...configAnterior,
      minuscula: valor,
    }));
  };

  const handleChangeNumeros = (valor) => {
    setConfiguracao( (configAnterior) => ({
      ...configAnterior,
      numeros: valor,
    }));
  };

  const handleChangeEspeciais = (valor) => {
    setConfiguracao( (configAnterior) => ({
      ...configAnterior,
      especiais: valor,
    }));
  };

  const handleGerarSenha = () => {
    setSenha('');
  };

  useEffect( () => handleGerarSenha, [configuracao] );

    return (
        <main className="principal">
          <h1>Gerador de senhas</h1>
          <div className="gerador-container">
            <div className="imagem-cadeado-container">
              <img src={cadeado} alt="imagem-cadeado"/>
            </div>
            <div className="componentes">
              <div className="input">
                <div className="senha">gOPsIMXnlPPlCsl</div>
                <span className="classificacao classificacao-lg muito-forte">muito forte</span>
                <div className="botao-gerar-container">
                  <a href="#" className="lnk-gerar"><Gerar className="img-gerar"/></a>
                </div>   
              </div>
              <div className="copiar">
                <a href="#" className="lnk-copiar">Copiar</a>
              </div>             
              <div className="ajustes">
                <div className="tamanho">
                <label htmlFor="tamanh-definido" className="tamanho-label">Tamanho da senha: </label>
                <span className="tamanho-definido">15</span>
                <button className="btn-senha">-</button>
                <input type="range" min="4" max={64} value={configuracao.tamanho} onChange={(e) => handleChangeTamanho(e.target.value)}></input>
                <button className="btn-senha">+</button>
                </div>
                <div className="complexidade">
                <label className="texto-caracteres">Caracteres utilizados: </label>
                <div className="check-caracteres">
                  <div className="check-opcao">
                    <input type="checkbox" id="maiuscula" className="item-opcao" value={configuracao.maiuscula} onChange={(e) => handleChangeMaiuscula(e.target.check)}/>
                    <label htmlFor="maiuscula" className="item-opcao-label">ABC</label>
                  </div>
                  <div className="check-opcao">
                    <input type="checkbox" id="minuscula" className="item-opcao" value={configuracao.minuscula} onChange={(e) => handleChangeMinuscula(e.target.check)} />
                    <label htmlFor="minuscula" className="item-opcao-label">abc</label>
                  </div>
                  <div className="check-opcao">
                    <input type="checkbox" id="numeros" className="item-opcao" value={configuracao.numeros} onChange={(e) => handleChangeNumeros(e.target.value)} />
                    <label htmlFor="numeros" className="item-opcao-label">123</label>
                  </div>
                  <div className="check-opcao">
                    <input type="checkbox" id="especiais" className="item-opcao" value={configuracao.especiais} onChange={(e) => handleChangeEspeciais(e.target.value)} />
                    <label htmlFor="especiais" className="item-opcao-label">#$&</label>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
};


//npm install react-scripts@2.1.8