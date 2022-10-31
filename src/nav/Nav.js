import Logo from "../multimedia/logo.png";
import FormularioFiltrar from "./FormularioFiltrar.js";

function Nav(props) {
  return (
    <nav className="flex justify-center 680:justify-between items-center p-2 sm:p-5 flex-wrap">
      <div className="w-[150px] lg:w-[200px]">
        <img src={Logo} alt="Logo" />
      </div>

    <FormularioFiltrar filtroUbicacionActual={props.filtroUbicacionActual} />    
    </nav>
  );
}

export default Nav;