import './App.css';
import logoNavBar from '../../image/logoNavBar.svg';

function App() {
  return (
    <div className='container'>
      <header>
        <img src={logoNavBar}/>
        <nav>
          <button><a href="#cotacao">Solicitar cotação</a></button>
        </nav>
      </header>
      <section>
        <h1>Uma nova geração de seguros  para carros <br/> <span>elétricos</span> & <span>híbridos</span></h1>
        <p>Quando você precisar, eu estarei aqui para te ajudar!</p>
        <button><a href="#cotacao">Solicitar cotação</a></button>
      </section>
    </div>
  );
}

export default App;
