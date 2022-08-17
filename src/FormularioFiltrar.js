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
      filtroHuespedesActual: ""
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
    <form className="justify-between text-base max-h-max border-r-2 shadow-md rounded-2xl flex mt-4 md:mt-0">
        <button className="border-r-2 pr-3 p-4 hover:underline shrink-0" value="Finland" onClick={desplegarSeccionFiltrar}>{this.state.filtroUbicacionActual == null ? "Todos" : this.state.filtroUbicacionActual}</button>

        <input className="focus:outline-none p-4 min-w-0 shrink w-full" type="text" max="10" min="0" placeholder="Máximo de personas" onChange={this.changeValueHuespedes} value={this.state.filtroHuespedesActual} />
        
        <button className="overflow-hidden border-l-2 p-4 shrink-0">
          <i className="fa-solid fa-magnifying-glass text-red-500"></i>
        </button>
    </form>
  );
  }
}

export default FormularioFiltrar;