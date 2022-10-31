import FormularioFiltrar from "../nav/FormularioFiltrar.js";
import React, { Component } from "react"
import root from "../index"
import App from "../App"
import Contenedor from "../funcionalidades-principales/Contenedor"
import FiltrarUbicacion from "./funcionalidades-SeccionFiltrar/FiltrarUbicacion"

class SeccionFiltrar extends Component {
  constructor(props) {
    super(props);
    this.state = {filtroHuespedesActual: props.filtroHuespedesActual};
  }

  render() {

    let contenido = <NavFiltrar filtroHuespedesActual={this.state.filtroHuespedesActual} />;
    return (
      <>
        <nav id="SeccionFiltrar" className="hidden bg-white h-screen sm:h-max z-20 w-full fixed w-full opacity-100 py-5">
          <Contenedor content={contenido} />
        </nav>
      </>
    );
  
  }
}

function NavFiltrar(props) {
  return (
    <>
    <FormularioFiltrar />
    <ul>
      
      <li>
        <FiltrarUbicacion ubicacion="Helsinki, Finland"/>
      </li>
      
      <li>
        <FiltrarUbicacion ubicacion="Turku, Finland" />
      </li>
      
      <li>
        <FiltrarUbicacion ubicacion="Oulu, Finland" />
      </li>
      
      <li>
        <FiltrarUbicacion ubicacion="Vaasa, Finland" />
      </li>
      
    </ul>
    </>
  );
}

export default SeccionFiltrar;