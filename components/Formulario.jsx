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

const Formulario = () => {
  const [kilovatios, setKilovatios] = useState("");
  const [potencia1, setpotencia1] = useState("");
  const [potencia2, setpotencia2] = useState("");
  const [facturadora, setFacturadora] = useState("enery");

  const handleChange = (event) => {
    setFacturadora(event.target.value);
    console.log(facturadora);
  };

  return (
    <div id="formulario">
      <TextField
        label="Kilovatios consumidos"
        id="kilovatios-consumidos"
        type="number"
        onInput={(e) => {
          setKilovatios(e.target.value);
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
            setpotencia1(e.target.value);
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
            setpotencia2(e.target.value);
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
          console.log("hola");
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
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={facturadora}
        onChange={handleChange}
      >
        <FormControlLabel value="enery" control={<Radio />} label="Enery" />
        <FormControlLabel value="naturgy" control={<Radio />} label="Naturgy" />
      </RadioGroup>
    </FormControl>
  );
}
export default Formulario;
