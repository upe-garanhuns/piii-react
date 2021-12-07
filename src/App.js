import React from 'react';
import './App.css';

import Cabecalho from './componentes/cabecalho';
import Rodape from './componentes/rodape';
import PainelConfiguracao from './componentes/painel-configuracao';

const App = function () {
  return (
    <div id="principal">
      <Cabecalho />
      <main className="conteudo">
        <PainelConfiguracao />
      </main>
      <Rodape />
    </div>
  );
};

export default App;
