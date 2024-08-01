import Formulario from "./Formulario";

const Calculadora = ({setResultadoMensual}) => {
  return (
    <div id="calculadora">
      <h2>Calculadora de luz</h2>
      <Formulario setResultadoMensual={setResultadoMensual}/>
    </div>
  );
};

export default Calculadora;
