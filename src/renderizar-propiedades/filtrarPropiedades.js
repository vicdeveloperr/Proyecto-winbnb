const propiedades = require("../datos.json");

function filtrarPropiedades(props) {
	let propiedadesFiltradas = [];

	let filtroHuespedes = props.filtroHuespedes; 

	let filtroUbicacion = props.filtroUbicacion;

	function recorrerPropiedades(ubicacion) {
		propiedades.map(propiedad => {
			let huespedesPropiedad = Number(propiedad.maxGuests);
			if(propiedad.city == ubicacion && filtroHuespedes >= huespedesPropiedad) {
				propiedadesFiltradas.push(propiedad);
			}
		});
	}

	if(props.filtroUbicacion == "Todo") {
		propiedades.map(propiedad => {
			let huespedesPropiedad = Number(propiedad.maxGuests);
			if(filtroHuespedes >= huespedesPropiedad){
			propiedadesFiltradas.push(propiedad);
			}
		});
	}
	if(props.filtroUbicacion == "Helsinki, Finland") {
		recorrerPropiedades("Helsinki");
	}else if(props.filtroUbicacion == "Turku, Finland") {
		recorrerPropiedades("Turku");
	}else if(props.filtroUbicacion == "Oulu, Finland") {
		recorrerPropiedades("Oulu");
	}else if(props.filtroUbicacion == "Vaasa, Finland") {
		recorrerPropiedades("Vaasa");
	}else if(props.filtroHuespedes != "undefined") {
		propiedades.map(propiedad => {
			let huespedesPropiedad = Number(propiedad.maxGuests);
			if(filtroHuespedes >= huespedesPropiedad) {
				propiedadesFiltradas.push(propiedad);
			}
		});
	}
	return propiedadesFiltradas;
}

export default filtrarPropiedades;