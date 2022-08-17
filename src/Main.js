import MostrarPropiedades from "./MostrarPropiedades.js";

function Main(props) {
	return(
	<main className="my-4">
		<h2 className="text-2xl font-semibold">Propiedades encontradas</h2>
		<MostrarPropiedades filtroHuespedes={props.propiedadesFiltroHuespedes}  filtroUbicacion={props.propiedadesFiltroUbicacion} />
	</main>
	);
}

export default Main;