import React, { Component } from "react";
import App from './App';
import root from "./index.js";

function actualizarPropiedades(props) {
    root.render(
    <React.StrictMode>
      <App desplegarSeccionFiltrar={props.desplegarSeccionFiltrar} propiedadesFiltroHuespedes={props.filtroHuespedes} propiedadesFiltroUbicacion={props.filtroUbicacion} />
    </React.StrictMode>
  );
}

export default actualizarPropiedades;