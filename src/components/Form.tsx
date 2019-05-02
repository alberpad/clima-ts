import React, { Component } from 'react';

export interface IConsulta {
  ciudad: string;
  pais: string;
}

interface IFormProps {
  datosConsulta: (c: IConsulta) => void;
}

class Form extends Component<IFormProps> {
  //Crear los refs
  ciudadRef = React.createRef<HTMLInputElement>();
  paisRef = React.createRef<HTMLSelectElement>();

  buscarClima = (e: React.FormEvent) => {
    e.preventDefault();
    const { datosConsulta } = this.props;
    // Leer los refs
    const consulta: IConsulta = {
      ciudad:
        this.ciudadRef && this.ciudadRef.current
          ? this.ciudadRef.current.value
          : '',
      pais:
        this.paisRef && this.paisRef.current ? this.paisRef.current.value : ''
    };
    // enviar por props
    datosConsulta(consulta);

    // opcional resetear el formulario
  };

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input ref={this.ciudadRef} id="ciudad" type="text" />
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.paisRef} name="Pais" id="pais">
                  <option value="" defaultValue="true">
                    Elige un país
                  </option>
                  <option value="ES">España</option>
                  <option value="FR">Francia</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="MX">Mexico</option>
                  <option value="US">Estados Unidos</option>
                </select>
                <label htmlFor="pais">Pais:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2 buscador">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-light btn-large yellow accent-4"
                  value="Buscar..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
