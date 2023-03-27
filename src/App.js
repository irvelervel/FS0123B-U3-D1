import './App.css'
import Header from './components/Header'
import HeaderArrow from './components/HeaderArrow'
import ClassComponent from './components/ClassComponent'
import Benvenuto from './components/Benvenuto'
// non serve indicare .js o .jsx

// questo è un React Component!
// un Componente React può essere semplice fino a questo punto: una funzione
// che torna una struttura simile all'HTML

// questa sintassi simile all'HTML si chiama JSX
// la differenza principale tra HTML e JSX riguarda l'utilizzo degli attributi
// in JSX gli attributi multi-parola vengono scritti in camelCase ("onclick" -> "onClick")
// e per definire una classe CSS invece di "class" si utilizza "className"

// PascalCase
// camelCase

const App = function () {
  let myName = 'Stefano'

  return (
    <div className="App">
      <header className="App-header">
        {/* qua vorrei inserire il componente Header */}
        <ClassComponent />

        {/* per interpolare stringhe con variabili e/o dati dinamici
      è sufficiente utilizzare una coppia di parentesi graffe {} */}
        <h2>CIAO EPICODE, sono {myName}</h2>
        <img
          src="https://placekitten.com/300"
          className="App-logo"
          alt="logo"
        />
        {/* printedName in gergo si chiama "prop" */}
        <Benvenuto printedName="Emanuele" colorOfTheText="red" />
        <Benvenuto printedName="Giorgia" colorOfTheText="green" />
        <Benvenuto printedName="Antonio" colorOfTheText="purple" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link alla documentazione
        </a>
      </header>
    </div>
  )
}

export default App
