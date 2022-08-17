import './App.css';
import Main from "./Main.js"
import Nav from "./Nav.js"
import Contenedor from "./Contenedor.js"

function DesplegarSeccionFiltrar(props) {

  let mainContenido = 
  <>
  <header>
      <Nav filtroUbicacionActual={props.propiedadesFiltroUbicacion} />      
    </header>
    <Main propiedadesFiltroUbicacion={props.propiedadesFiltroUbicacion != null ? props.propiedadesFiltroUbicacion : "Todo"} propiedadesFiltroHuespedes={props.propiedadesFiltroHuespedes != null ? props.propiedadesFiltroHuespedes : 10} />
  </>
  ;

  return (
    <>
    {props.elemento}
    <Contenedor content={mainContenido} />
    </>
  );

}


function App(props) {
  let usarContenedor;
  let element;
  if(props.desplegarSeccionFiltrar == "true") {
    usarContenedor = false;
    element = <DesplegarSeccionFiltrar elemento={props.elemento} /> ;
  }else {
  element = (
    <>
    <header>
      <Nav filtroUbicacionActual={props.propiedadesFiltroUbicacion} />      
    </header>
    <Main propiedadesFiltroUbicacion={props.propiedadesFiltroUbicacion != null ? props.propiedadesFiltroUbicacion : "Todo"} propiedadesFiltroHuespedes={props.propiedadesFiltroHuespedes != null ? props.propiedadesFiltroHuespedes : 10} />
    </>
  );
  }
  return (
    <Contenedor usarContenedor={usarContenedor} content={element} />
  );

}

export default App;
