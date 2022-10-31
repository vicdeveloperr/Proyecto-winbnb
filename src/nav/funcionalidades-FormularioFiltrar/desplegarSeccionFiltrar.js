import React from 'react';
import App from "../../App.js";
import root from "../../index.js";
import SeccionFiltrar from "../../seccion-filtrar/SeccionFiltrar"

function desplegarSeccionFiltrar(props) {
    props.preventDefault();
    document.querySelector("#SeccionFiltrar").classList.remove("hidden");
}

export default desplegarSeccionFiltrar;