import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";

const Formulario = ({ setResultadoMensual }) => {
  const [kilovatios, setKilovatios] = useState("");
  const [potencia1, setpotencia1] = useState("");
  const [potencia2, setpotencia2] = useState("");
  const [facturadora, setFacturadora] = useState("naturgy");

  const facturadoras = {
    naturgy: {
      tarifaPotencia: 0.1037,
      tarifaEnergia: 0.1149,
    },
    iberdrola: {
      tarifaPotencia: 0.1082,
      tarifaEnergia: 0.1134,
    },
    endesa: {
      tarifaPotencia: 0.0976,
      tarifaEnergia: 0.1105,
    },
    eneri: {
      tarifaPotencia: 0.109,
      tarifaEnergia: 0.118,
    },
    ganaEnergia: {
      tarifaPotencia: 0.1052,
      tarifaEnergia: 0.1167,
    },

  };

  const IVA = 0.21;
  const DiasFacturados = 30;
  const impuestoElectricidad = 0.05113;
  const alquilerContador = 0.81;
  const potenciaContratada = potencia1 + potencia2;
  const facturadoraContratada = facturadora;
  const precioKWH = facturadoras[facturadoraContratada].tarifaEnergia;
  /*  const precioPotencia1 = facturadora === "naturgy" ? 0.103663 : 0.16; */
  const precioPotencia1 = facturadoras[facturadoraContratada].tarifaPotencia;
  const precioPotencia2 = facturadora === "naturgy" ? 0.034042 : 0.16;

  const terminoPotencia = calcularTerminoPotencia(
    potenciaContratada,
    precioPotencia1,
    DiasFacturados
  );
  const terminoEnergia = calcularTerminoEnergia(kilovatios, precioKWH);

  const costoImpuestoElectricidad =
    (terminoPotencia + terminoEnergia) * impuestoElectricidad;

  const totalSinIva = calcularSubTotal(
    terminoPotencia,
    terminoEnergia,
    costoImpuestoElectricidad,
    alquilerContador
  );
  const costoIva = totalSinIva * IVA;

  function calcularTerminoPotencia(
    potenciaContratada,
    precioPotencia1,
    DiasFacturados
  ) {
    return potenciaContratada * precioPotencia1 * DiasFacturados;
  }
  function calcularTerminoEnergia(kilovatiosConsumidos, precioKWH) {
    return kilovatiosConsumidos * precioKWH;
  }
  function calcularSubTotal(
    terminoPotencia,
    terminoEnergia,
    costoImpuestoElectricidad,
    alquilerContador
  ) {
    return (
      terminoPotencia +
      terminoEnergia +
      costoImpuestoElectricidad +
      alquilerContador
    );
  }
  const calcularTotalFactura = (totalSinIva, costoIva) =>
    totalSinIva + costoIva;

  const handleChange = (event) => {
    setFacturadora(event.target.value);
  };

  return (
    <div id="formulario">
      <TextField
        label="Kilovatios consumidos"
        id="kilovatios-consumidos"
        type="number"
        onInput={(e) => {
          setKilovatios(+e.target.value);
        }}
        value={kilovatios}
        sx={{
          marginY: 2,
          width: "100%",
          "& .MuiInputBase-root": {
            height: "40px", // Ajusta la altura del TextField
          },
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">kWh</InputAdornment>,
          inputProps: { min: 0 },
        }}
      />
      <div id="potencias">
        <TextField
          label="Potencia 1"
          id="kilovatios-consumidos"
          type="number"
          onInput={(e) => {
            setpotencia1(+e.target.value);
          }}
          value={potencia1}
          sx={{
            marginY: 2,
            width: "40%",
            "& .MuiInputBase-root": {
              height: "40px", // Ajusta la altura del TextField
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kW</InputAdornment>
            ),
            inputProps: { min: 0 },
          }}
        />
        <TextField
          label="Potencia 2"
          id="kilovatios-consumidos"
          type="number"
          onInput={(e) => {
            setpotencia2(+e.target.value);
          }}
          value={potencia2}
          sx={{
            marginY: 2,
            width: "40%",
            "& .MuiInputBase-root": {
              height: "40px", // Ajusta la altura del TextField
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kW</InputAdornment>
            ),
            inputProps: { min: 0 },
          }}
        />
      </div>
      <div>
        <ControlledRadioButtonsGroup
          facturadora={facturadora}
          handleChange={handleChange}
        />
      </div>

      <Button
        id="btn-calcular"
        variant="contained"
        startIcon={
          <CalculateIcon
            sx={{
              position: "relative",
              bottom: "1.5px",
            }}
          />
        }
        onClick={() => {
          setResultadoMensual(
            +calcularTotalFactura(totalSinIva, costoIva).toFixed(3)
          );
        }}
      >
        Calcular
      </Button>
    </div>
  );
};

function ControlledRadioButtonsGroup({ facturadora, handleChange }) {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Facturadora
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group "
        name="controlled-radio-buttons-group"
        value={facturadora}
        onChange={handleChange}
        className="facturadoras"
      >
        <FormControlLabel
          value="eneri"
          control={<Radio />}
          label="Eneri"
          className="facturadora"
        />
        <FormControlLabel value="naturgy" control={<Radio />} label="Naturgy" className="facturadora" />
        <FormControlLabel value="endesa" control={<Radio />} label="Endesa" className="facturadora" />
        <FormControlLabel
          value="iberdrola"
          control={<Radio />}
          label="Iberdrola"
          className="facturadora"
        />
      </RadioGroup>
    </FormControl>
  );
}
export default Formulario;
