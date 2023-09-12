import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";



const DatosUsuario = () => {

  const[email, setEmail] = useState({value: "", valid: true})
  const[password, setPassword] = useState({value: "", valid: true})
  
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
        onSubmit={ (event) => {
          event.preventDefault()
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={false}
          helperText={false && "Ingresa un correo electrónico válido"}
          value={ email.value } //ya puedo acceder de esta manera gracias ala useState
          //asi podemos modificar el contenido del input
          onChange={ (input) => setEmail({value: input.target.value, valid: true})}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          value={ password.value }
          onChange={ (input) => setPassword({value: input.target.value, valid: true})}
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  
}

export default DatosUsuario;
