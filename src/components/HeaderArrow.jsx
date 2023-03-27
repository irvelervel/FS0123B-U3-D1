const HeaderArrow = () => (
  <>
    <h1>CIAO</h1>
    <h5>CIAO DI NUOVO</h5>
  </>
)

// <> è un REACT FRAGMENT
// può servire per eludere la regola di React secondo cui
// è necessario tornare un SOLO elemento da ogni componente
// di fatto questo componente stamperà nel DOM un h1 e un h5
// senza nessun elemento contenitore

export default HeaderArrow
