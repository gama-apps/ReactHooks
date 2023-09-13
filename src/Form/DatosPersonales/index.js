import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";

const DatosPersonales = ({updateStep}) => {

  const [name, setName] = useState({value: "", valid: null})
  const [lastName, setLastName] = useState({value: "", valid: null})
  const [phone, setPhone] = useState({value: "", valid: null})

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
        updateStep(2)
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={name.valid === false}
        helperText={name.valid === false && "Ingresa un nombre válido"}
        value={name.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarNombre(value)
          setName({value: valid})
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={lastName.valid === false}
        helperText={lastName.valid === false && "Ingresa un apellido válido"}
        value={lastName.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarApellidos(value)
          setLastName({value: valid})
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        error={phone.valid === false}
        helperText={phone.valid === false && "Ingresa un numero válido"}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarTelefono(value)
          setPhone({value: valid})
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
