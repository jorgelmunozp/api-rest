import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Api Rest World Project </h1>
        <a  href="https://hargomo.com/" className="App-link" target="_blank" rel="noopener noreferrer" >
          Hárgomo
        </a>
        <a  href="https://jorgelmunozp.github.io/api-rest/countries.json" className="App-link" target="_blank" rel="noopener noreferrer" >
          Api Countries
        </a>
      </header>
    </div>
  );
}

export default App;
