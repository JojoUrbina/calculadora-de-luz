const Resultados = () => {
  return (
    <div id="resultados">
      <h2>Resultados</h2>
      <p>
        La aplicacion te mostrara el costo de la factura por mes y por año, lo
        cual puedes cambiar si eliges otro servicio.
      </p>
      <div id="contenedor-resultado">
        <p>Tu factura mensual sera de:</p>
        <p id="resultado-mensual">$1000</p>
        <div id="linea"></div>
        <p>Tu factura anual sera de:</p>
        <p id="resultado-anual">$1000</p>
      </div>
    </div>
  );
};

export default Resultados;
