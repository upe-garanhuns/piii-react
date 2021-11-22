import './App.css';
import Gerador from './components/gerador/index.js';
import Cabecalho from './components/cabecalho/index.js';

function App() {
  return (
    <>
      <div id="inicio">
        <Cabecalho></Cabecalho>
        <Gerador></Gerador>
        <footer></footer>
      </div>      
    </>
  );
}

export default App;
