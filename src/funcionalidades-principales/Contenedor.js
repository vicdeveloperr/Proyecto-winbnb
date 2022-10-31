function Contenedor(props) {

  if(props.usarContenedor == false) {
  return (
    <div className="w-full m-auto static">
      {props.content}
    </div>
  );
  }else {
  return (
    <div className="min-w-11/12 max-w-[1100px] m-auto static">
      {props.content}
    </div>
  );  
  }
  
}

export default Contenedor;