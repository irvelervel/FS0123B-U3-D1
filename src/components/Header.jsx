// questo è un file pronto per diventare un componente React
// il modo più semplice per creare un componente React è utilizzare una funzione
// questa funzione dovrà ritornare della sintassi JSX

// per buona prassi chiamate la funzione esattamente come il file,
// con tanto di nomenclatura PascalCase
const Header = function () {
  return <h1 className="text-red">CIAO</h1>
}

// questa cosa qua già funziona!

export default Header
// questa riga è fondamentale, e permette al vostro componente
// di essere importato da qualche parte!
