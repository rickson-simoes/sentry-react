import React, { Component } from 'react';


class App extends Component {

  state = {
    valor : ''
  }

  digitarTexto = e  => {
    this.setState({valor: e.target.value });
    console.log(this.state.valor);
  }

  enviarErro = e => {
    e.preventDefault();
    const { valor } = this.state;

    if (valor) {
      throw new Error(`Erro - Teste: ${valor}`);
    }
  }

  render () {
    return (
      <>   
        <h3>Nome do erro: {this.state.valor}</h3>

        <form onSubmit={this.enviarErro}>
          <input onChange={this.digitarTexto} type="text" name="name" />
          <input type="submit" value="Enviar" name="name" />
        </form>
        
      </>
    )
  }

}

export default App;