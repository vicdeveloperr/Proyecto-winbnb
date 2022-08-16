import Logo from "./multimedia/logo.png";
import SeccionFiltrar from "./SeccionFiltrar.js";
import FormularioFiltrar from "./FormularioFiltrar.js";

function Nav(props) {
  return (
    <nav className="container flex md:justify-between items-center p-5 flex-wrap justify-center">
      <div className="w-[200px]">
        <img src={Logo} alt="Logo" />
      </div>

    <FormularioFiltrar filtroUbicacionActual={props.filtroUbicacionActual} />    
    </nav>
  );
}

export default Nav;