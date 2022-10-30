<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
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

>>>>>>> 4d19897d304d1c77b4a4608c8185dafbcba1c4ab
}

export default App;
