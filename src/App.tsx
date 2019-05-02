import React, { Component } from 'react';
import Header from './components/Header';
import Form, { IConsulta } from './components/Form';
import Error from './components/Error';
import Clima from './components/Clima';

interface IState {
  error: boolean;
  consulta: IConsulta;
  resultado: any;
}
class App extends Component {
  state: IState = {
    error: false,
    consulta: {
      ciudad: '',
      pais: ''
    },
    resultado: {}
  };

  componentDidUpdate(prevProps: any, prevState: IState) {
    if (prevState.consulta !== this.state.consulta) {
      this.consultarApi();
    }
  }

  componentDidMount() {
    this.setState({ error: false });
  }

  consultarApi = async () => {
    const { ciudad, pais } = this.state.consulta;
    if (!ciudad || !pais) return null;
    const appId: string = '862a4889ee19914dcecc053b4cc12c4a';
    const url: string = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;
    try {
      const respuesta: Response = await fetch(url);
      const respuestaJson: any = await respuesta.json();
      this.setState({ error: false, resultado: respuestaJson });
    } catch (error) {
      console.log(error);
      this.setState({ error: true, respuesta: {} });
    }
  };

  datosConsulta = (consulta: IConsulta) => {
    !consulta.ciudad || !consulta.pais
      ? this.setState({ error: true, consulta: {} })
      : this.setState({ consulta, error: false });
  };

  render() {
    const { error } = this.state,
      { cod } = this.state.resultado;

    return (
      <div className="App">
        <Header title="CLIMA APP" />
        <Form datosConsulta={this.datosConsulta} />
        {error ? (
          <Error mensaje="Ambos campos son obligatorios" />
        ) : cod === '404' ? (
          <Error mensaje="No se encuentra la ciudad" />
        ) : (
          <Clima resultado={this.state.resultado} />
        )}
      </div>
    );
  }
}

export default App;
