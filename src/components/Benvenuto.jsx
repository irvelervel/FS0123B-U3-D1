// props è un OGGETTO
// avrà come proprietà TUTTE le prop che io ho passato all'invocazione del componente
// props.printedName
// props.colorOfTheText

const Benvenuto = (props) => {
  console.log('Ecco il messaggio di benvenuto')
  // <div style={{color: props.colorOfTheText}}>
  return (
    <div className={props.colorOfTheText}>
      <p>Benvenuto nel mio sito, {props.printedName}!</p>
    </div>
  )
}

export default Benvenuto
