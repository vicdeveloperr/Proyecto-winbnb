import RenderizarPropiedades from "./renderizar-propiedades/RenderizarPropiedades.js";

function Main(props) {
	return(
	<main className="my-4">
		<h2 className="text-2xl font-semibold">Propiedades encontradas</h2>
		<RenderizarPropiedades filtroHuespedes={props.propiedadesFiltroHuespedes}  filtroUbicacion={props.propiedadesFiltroUbicacion} />
	</main>
	);
}

export default Main;