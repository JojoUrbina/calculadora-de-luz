import { useState } from "react";
import Calculadora from "../components/Calculadora";
import Resultados from "../components/Resultados";

function App() {
  const [resultadoMensual, setResultadoMensual] = useState(0)
  const [resultadoAnual, setResultadoAnual] = useState(0)
  return (
      <div className="aplicacion">
        <Calculadora setResultadoMensual={setResultadoMensual} />
        <Resultados resultadoMensual={resultadoMensual}/>
      </div>
  );
}

export default App;
