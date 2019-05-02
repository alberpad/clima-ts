import React, { Component } from 'react';
interface IClimaProps {
  resultado: any;
}
class Clima extends Component<IClimaProps> {
  mostrarClima = () => {
    const { name, weather, main } = this.props.resultado;
    if (!name || !weather || !main) return null;
    const kelvin = 273.15;
    const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    return (
      <div className="row">
        <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
          <div className="card-panel light-blue align-center">
            <span className="white-text">
              <h2>Resultado Clima de: {name}</h2>
              <p className="temperatura">
                Actual: {(main.temp - kelvin).toFixed(1)} &deg;C
                <img src={urlIcon} alt={`Clima de ${name}`} />
              </p>
              <p>Max. {(main.temp_max - kelvin).toFixed(1)} &deg;C</p>
              <p>Min. {(main.temp_min - kelvin).toFixed(1)} &deg;C</p>
            </span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div className="container">{this.mostrarClima()}</div>;
  }
}

export default Clima;
