import logo from './icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Api Rest World Project </h1>

        <a  href="https://jorgelmunozp.github.io/api-rest/countries.json" className="App-link" target="_blank" rel="noopener noreferrer" >
          <h2>Api Countries</h2>
        </a>
        <a  href="https://hargomo.com/" className="App-link" target="_blank" rel="noopener noreferrer" >
          <p>Hárgomo</p>
        </a>
      </header>
    </div>
  );
}

export default App;
