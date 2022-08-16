import React from 'react';
import App from "./App.js";
import root from "./index.js";
import Contenedor from "./Contenedor.js";
import FormularioFiltrar from "./FormularioFiltrar.js";
import SeccionFiltrar from "./SeccionFiltrar"
import actualizarPropiedades from "./actualizarPropiedades"
var ubicacionPropiedadFiltrada = null;

function desplegarSeccionFiltrar(props) {
    let contenidoSeccionFiltrar = <SeccionFiltrar />;
    root.render(
    <React.StrictMode>
      <App desplegarSeccionFiltrar="true" elemento={contenidoSeccionFiltrar} />
    </React.StrictMode>
    );
}

export default desplegarSeccionFiltrar;