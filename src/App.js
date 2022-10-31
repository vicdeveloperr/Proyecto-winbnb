import './estilos/App.css';
import Main from "./Main.js"
import Nav from "./nav/Nav.js"
import Contenedor from "./funcionalidades-principales/Contenedor.js"
import SeccionFiltrar from "./seccion-filtrar/SeccionFiltrar"

function App(props) {
  let usarContenedor;
  let element = (
    <>
      <header>
        <SeccionFiltrar />     
        <Nav filtroUbicacionActual={props.propiedadesFiltroUbicacion} /> 
      </header>
      <Main propiedadesFiltroUbicacion={props.propiedadesFiltroUbicacion != null ? props.propiedadesFiltroUbicacion : "Todo"} propiedadesFiltroHuespedes={props.propiedadesFiltroHuespedes != null ? props.propiedadesFiltroHuespedes : 10} />
    </>
  );
  return (
    <Contenedor usarContenedor={usarContenedor} content={element} />
  );
}

export default App;
