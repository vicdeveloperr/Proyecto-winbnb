const propiedades = require("./datos.json");

function SuperAnfitrion(props) {
	if(props.anfitrion == true) {
		return (
			<span className="rounded-xl border-black border-solid border-[1px] px-1 py-px font-normal mr-3">SUPER HOST</span>
		);
	}else {
		return null;
	}
}

function ElementoEspecificacionesPropiedad(props) {
	const propiedadesFiltradas =  props.propiedadesFiltradas;
	let contenedorPropiedades;

	contenedorPropiedades = propiedadesFiltradas.map((propiedad, index) => {
	return (
		<div key={propiedad.title + index} className="opacity-90 hover:opacity-100 cursor-pointer">
			<div className="rounded-xl overflow-hidden aspect-video">
				<img className="object-cover" src={propiedad.photo} alt={propiedad.title} />
			</div>
			<p className="pt-4">
				<SuperAnfitrion anfitrion={propiedad.superHost}/>
				<span className="text-lg font-light">{propiedad.type}<Dormitorios beds={propiedad.beds} /></span>
				<span className="font-bold text-lg float-right">
					<i className="fa-solid fa-star mr-1"></i>
					{propiedad.rating}
				</span>
			</p>
			<h5 className="text-lg font-semibold">{propiedad.title}</h5>					
		</div>
	);
	});

			
	return (
		<div className="mt-9 grid grid-cols-3 gap-x-5 gap-y-7 grid-rows-[repeat(4, minmax(0, max-content))] grid-flow-dense">
			{propiedadesFiltradas[0] == null ? <h2 className="text-lg font-semibold text-red-500">No hay propiedades coincidentes :(</h2> : contenedorPropiedades} 
		</div>
	);
}

function Dormitorios(props) {
	if(props.beds != null) {
		return (
			<span>{", " + props.beds + " dormitorios"}</span>
		);
	}else {
		return (
			<span>, sin dormitorios</span>
		);
	}
}

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

	if(props.filtroUbicacion == null) {
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

function MostrarPropiedades(props) {
	let propiedadesFiltradas = filtrarPropiedades(props);
	return (
		<ElementoEspecificacionesPropiedad propiedadesFiltradas={propiedadesFiltradas} />
	);
}

export default MostrarPropiedades;