function Contenedor(props) {

  if(props.usarContenedor == false) {
  return (
    <div className="w-full m-auto static">
      {props.content}
    </div>
  );
  }else {
  return (
    <div className="w-5/6 m-auto static">
      {props.content}
    </div>
  );  
  }
  
}

export default Contenedor;