<<<<<<< HEAD
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
=======
import { Button, Card, CardContent, FormControl, Grid, Modal, TextField, Typography, TextareaAutosize } from '@mui/material'
import { useState } from 'react'
>>>>>>> afcdeade58cea0f9d87447005fc6d0e7e04bd3b7
import axios from "axios";
import DoneIcon from "@mui/icons-material/Done";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import React from "react";

export const Historial = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    id,
    cedula,
    nombreTitular,
    direccion,
    telefono,
    nombreMascota,
    tipoMascota,
    razaMascota,
    edadMascota,
    comentarios,
  } = props.row;
  console.log(props.row);

  const [paciente, setPaciente] = useState({
    id: id,
    informe: "",
    cedula: cedula,
    nombreTitular: nombreTitular,
    direccion: direccion,
    telefono: telefono,
    nombreMascota: nombreMascota,
    tipoMascota: tipoMascota,
    razaMascota: razaMascota,
    edadMascota: edadMascota,
    comentarios: comentarios,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    const nw = {
      pacienteId: id,
      informe: paciente.informe,
=======
        id,
        cedula,
        nombreTitular,
        direccion,
        telefono,
        nombreMascota,
        tipoMascota,
        razaMascota,
        edadMascota,
        comentarios,

    } = props.row;
   


    const [paciente, setPaciente] = useState({
        id: id,
        informe: "",
        cedula: cedula,
        nombreTitular: nombreTitular,
        direccion: direccion,
        telefono: telefono,
        nombreMascota: nombreMascota,
        tipoMascota: tipoMascota,
        razaMascota: razaMascota,
        edadMascota: edadMascota,
        comentarios: comentarios,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nw = {
            pacienteId: id,
            informe: paciente.informe,

        };
        const res = await axios.post(
            "http://localhost:8081/api/health-control/v1/historiales",
            nw
        );
        console.log(res)
        window.location.href = "/Pacientes";
>>>>>>> afcdeade58cea0f9d87447005fc6d0e7e04bd3b7
    };
    const res = await axios.post(
      "http://localhost:8081/api/health-control/v1/historiales",
      nw
    );
    console.log(res);
    window.location.href = "/Pacientes";
  };

<<<<<<< HEAD
  const handleChange = (e, valueName, setPaciente) => {
    let value = e.target.value;
    setPaciente((paciente) => ({
      ...paciente,
      [valueName]: value,
    }));
  };
  console.log(paciente);
=======
    const handleChange = (e, valueName, setPaciente) => {
        let value = e.target.value;
        setPaciente((paciente) => ({
            ...paciente,
            [valueName]: value,
        }));
    };
    
>>>>>>> afcdeade58cea0f9d87447005fc6d0e7e04bd3b7

  return (
    <div>
      <Button onClick={handleOpen}>
        <DescriptionOutlinedIcon></DescriptionOutlinedIcon>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <Card
              sx={{ mt: 20 }}
              style={{
                backgroundColor: "#1E272E",
                padding: "1rem",
              }}
            >
<<<<<<< HEAD
              <Typography variant="h4" textAlign="center" color="white">
                Crear Historial
              </Typography>
              <Typography color={"white"} textAlign="center">
                Titular:{nombreMascota}
              </Typography>
              <Typography color={"white"} textAlign="center">
                Propietario:{nombreTitular}
              </Typography>
              <CardContent>
                <div>
                  <FormControl style={{ overflow: "scroll" }}>
                    <TextField
                      required={true}
                      name="informe"
                      onChange={(e) => handleChange(e, "informe", setPaciente)}
                      value={paciente.informe}
                      variant="outlined"
                      label="Agregar Historial"
                      multiline
                      sx={{ m: 1, mt: 3, width: "100ch" }}
                      name="comentarios"
                      inputProps={{ style: { color: "white" } }}
                      InputLabelProps={{ style: { color: "white" } }}
                    ></TextField>
                    <Button
                      color="success"
                      variant="contained"
                      onClick={handleSubmit}
                    >
                      <DoneIcon></DoneIcon>
                    </Button>
                  </FormControl>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};
=======
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Grid item xs={3}>
                        <Card sx={{ mt: 5 }}
                            style={{
                                backgroundColor: "#1E272E",
                                padding: "1rem",
                            }}>
                            <Typography variant="h4" textAlign="center" color="white">
                                Crear Historial
                            </Typography>
                            <Typography color={"white"} textAlign="center">Titular:{nombreMascota}</Typography>
                            <Typography color={"white"} textAlign="center">Propietario:{nombreTitular}</Typography>
                            <CardContent>
                                <FormControl>

                                    <TextField required={true}
                                        maxRows={15}
                                        aria-label="maximum height"
                                        style={{ width: 1000 }}
                                        name="informe"
                                        onChange={(e) => handleChange(e, "informe", setPaciente)}
                                        value={paciente.informe}
                                        variant="outlined"
                                        label="Agregar Historial"
                                        multiline
                                        sx={{ m: 1, mt: 3, width: '100ch' }}
                                        name="comentarios"
                                        inputProps={{ style: { color: "white" } }}
                                        InputLabelProps={{ style: { color: "white" } }}>
                                    </TextField>
                                    <Button color="success" variant="contained" onClick={handleSubmit}><DoneIcon></DoneIcon></Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    )
}
>>>>>>> afcdeade58cea0f9d87447005fc6d0e7e04bd3b7

export default Historial;
