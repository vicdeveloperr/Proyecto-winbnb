import React, { Component } from "react"
import actualizarPropiedades from "../../funcionalidades-principales/actualizarPropiedades"

class FiltrarUbicacion extends Component {
	constructor(props) {
		super(props);
		this.state = {ubicacion: props.ubicacion};
		this.ubicacionSeleccionada = this.ubicacionSeleccionada.bind(this);
	}

	ubicacionSeleccionada(event) {
		let filtroUbicacion = event.target.textContent;
		let pasarProps = {filtroUbicacion: event.target.textContent, desplegarSeccionFiltrar: false}
		actualizarPropiedades(pasarProps);
		this.setState({ubicacion: event.target.textContent});
		document.querySelector("#SeccionFiltrar").classList.add("hidden");
	}

	render() {

		return (
	    <button className="font-light text-lg p-3 hover:underline text-start" onClick={this.ubicacionSeleccionada} >
	        <i className="fa-solid fa-location-dot mr-2"></i>
	        {this.state.ubicacion}  
	    </button>
		);
	
	}
}

export default FiltrarUbicacion;