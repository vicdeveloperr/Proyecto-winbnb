import filtrarPropiedades from "./filtrarPropiedades";
import ContenedorEspecificacionesPropiedad from "./ContenedorEspecificacionesPropiedad";

function RenderizarPropiedades(props) {
	let propiedadesFiltradas = filtrarPropiedades(props);
	return (
		<ContenedorEspecificacionesPropiedad propiedadesFiltradas={propiedadesFiltradas} />
	);
}

export default RenderizarPropiedades;
