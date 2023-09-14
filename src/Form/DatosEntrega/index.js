import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [address, setAddress] = useState({vallue: "", valid: null})
  const [city, setCity] = useState({vallue: "", valid: null})
  const [province, setProvince] = useState({vallue: "", valid: null})
  
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit = {(event) => {
        event.preventDefault()
        updateStep(3)
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={address.valid === false}
        helperText={address.valid === false && "Ingresa una direccion válida"}
        value={address.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setAddress({value: valid})
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={city.valid === false}
        helperText={city.valid === false && "Ingresa el nombre de ciudad válido"}
        value={city.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setCity({value: valid})
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={province.valid === false}
        helperText={province.valid === false && "Ingresa un nombre de provincia válido"}
        value={province}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setProvince({value: valid})
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
