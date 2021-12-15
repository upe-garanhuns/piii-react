import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css'
import {ReactComponent as Gerar} from '../../imagens/gerar.svg';
import cadeado from '../../imagens/cadeado.png';

export default function Gerador(props) {

  const [senha, setSenha] = useState('gOPsIMXnlPPlCsl');

  const [tamanho, setTamanho] = useState(4);
  const [maiuscula, setMaiuscula] = useState(false);
  const [minuscula, setMinuscula] = useState(false);
  const [numeros, setNumeros] = useState(false);
  const [especiais, setEspeciais] = useState(false);

  const matriz = () => {
    let gerador = [];

    gerador.push(maiuscula ? [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'] : []);
    gerador.push(minuscula ? [...'abcdefghijklmnopqrstuvwxyz'] : []);
    gerador.push(numeros ? [...'0123456789'] : []);
    gerador.push(especiais ? [...'!@#$%&*()_'] : []);

    console.log(gerador.flat());
  }


  useEffect(() => {
    let senha = Array.from({ length: tamanho }, matriz).flat();

    senha.sort(() => Math.random() - 0.5);
    setSenha(senha.slice(0, tamanho).join(""));

    console.log("Senha", senha);
  }, [tamanho, maiuscula, minuscula, numeros, especiais]);


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
                <input type="range" min="4" max={64} value={tamanho} onChange={(e) => setTamanho(parseInt(e.target.value))}></input>
                <button className="btn-senha">+</button>
                </div>
                <div className="complexidade">
                <label className="texto-caracteres">Caracteres utilizados: </label>
                <div className="check-caracteres">
                  <div className="check-opcao">
                    <input type="checkbox" id="maiuscula" className="item-opcao" value={maiuscula} onChange={(e) => setMaiuscula(e.target.check)}/>
                    <label htmlFor="maiuscula" className="item-opcao-label">ABC</label>
                  </div>
                  <div className="check-opcao">
                    <input type="checkbox" id="minuscula" className="item-opcao" value={minuscula} onChange={(e) => setMinuscula(e.target.check)} />
                    <label htmlFor="minuscula" className="item-opcao-label">abc</label>
                  </div>
                  <div className="check-opcao">
                    <input type="checkbox" id="numeros" className="item-opcao" value={numeros} onChange={(e) => setNumeros(parseInt(e.target.value))} />
                    <label htmlFor="numeros" className="item-opcao-label">123</label>
                  </div>
                  <div className="check-opcao">
                    <input type="checkbox" id="especiais" className="item-opcao" value={especiais} onChange={(e) => setEspeciais(e.target.check)} />
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