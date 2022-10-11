import currency from './currency.svg';
import './App.css';
import CurrencyDiv from './components/CurrencyDiv/CurrencyDiv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={currency} width="200" height="200" className="App-currency" alt="currency" />
        <p>
          Convert a value from a currency to another
        </p>
        <CurrencyDiv></CurrencyDiv>
        <a
          className="App-link"
          href="https://rroll.to/iHgSMg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't click me
        </a>
      </header>
    </div>
  );
}

export default App;
