import desplegarSeccionFiltrar from "./desplegarSeccionFiltrar.js";
import React, { Component } from "react";
import App from './App';
import root from "./index.js";
import actualizarPropiedades from "./actualizarPropiedades"

class FormularioFiltrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtroUbicacionActual: props.filtroUbicacionActual,
      filtroHuespedesActual: 10
    };
    this.changeValueHuespedes = this.changeValueHuespedes.bind(this);
  }

  changeValueHuespedes(event) {
    this.setState({filtroHuespedesActual: event.target.value});
    let pasarProps = {desplegarSeccionFiltrar: false, filtroHuespedes: event.target.value, filtroUbicacion: this.state.filtroUbicacionActual};
    actualizarPropiedades(pasarProps);
  }

  render() {
    return (
    <form className="max-w-max text-base h-max border-r-2 shadow-md rounded-2xl">
        <button className="border-r-2 pr-3 p-4 hover:underline" value="Finland" onClick={desplegarSeccionFiltrar}>{this.state.filtroUbicacionActual == null ? "Todos" : this.state.filtroUbicacionActual}</button>

        <input className="ml-3 focus:outline-none p-4" type="number" max="10" min="0" placeholder="Máximo de personas" onChange={this.changeValueHuespedes} value={this.state.filtroHuespedesActual} />
        
        <button className="overflow-hidden p-4 border-l-2">
          <i className="fa-solid fa-magnifying-glass text-red-500"></i>
        </button>
    </form>
  );
  }
}

export default FormularioFiltrar;