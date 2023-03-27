// in React è possibile creare componenti anche come CLASSI
// i componenti a classi sono leggermente più scomodi da scrivere, ma hanno
// il maggior numero di funzionalità

import { Component } from 'react'
// Component è il componente a classe più originario e generico possibile,
// definito nella libreria di React

class ClassComponent extends Component {
  // questa classe è un componente React
  render() {
    // senza render() il componente a classe non funziona!
    return <h1>{this.props.title}</h1>
  }
}

export default ClassComponent
