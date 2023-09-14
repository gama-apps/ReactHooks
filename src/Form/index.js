import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step"

import { validarPassword, validarEmail } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0)

  // const selectStep = () => {
  //   switch (step){
  //     case 0: return <DatosUsuario/>
  //     break;
  //     case 1: return <DatosPersonales/>
  //     break;
  //     case 2: return <DatosEntrega/>
  //     break;
  //     default: return <Complete/>
  //     break
  //   } 
  // }

  const updateStep = (step) => {
    setStep(step)
  }

//   const steps = {
//     0: <DatosUsuario updateStep={updateStep}/>,
//     1: <DatosPersonales updateStep={updateStep}/>,
//     2: <DatosEntrega updateStep={updateStep}/>,
//     3: <Complete />
// }

const onSubmit = () => {}

const handleChange = (element, position, currentStep, validator) => {
  const value = element.target.value
  const valid = validator(value)
}

const stepsFlow = {
  0: {
    inputs: [
      {
        label: "Correo eletronico",
        type: "email",
        value: "",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa un correo electrónico válido",
        validator: validarEmail
      },
      {
        label: "Contraseña",
        type: "password",
        value: "",
        valid: null,
        onChange: handleChange,
        helperText: "Ingresa una contraseña válida de al menos 8 caracteres",
        validator: validarPassword
      },
    ],
    buttonText: "Siguiente",
    onSubmit: onSubmit
  }
}

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step}/>}
        {/* {selectStep()} */}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step}/>
      </FormSpace>
    </Box>
  );
};

export default Form;
