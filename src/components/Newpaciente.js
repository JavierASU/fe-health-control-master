import React from "react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Newpaciente() {
  const [loading, setloading] = useState(false);

  const [paciente, setPaciente] = useState({
    cedula: "",
    nombreTitular: "",
    direccion: "",
    telefono: "",
    nombreMascota: "",
    tipoMascota: "",
    razaMascota: "",
    edadMascota: "",
    comentarios: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true);

    const nw = {
      cedula: paciente.cedula,
      nombreTitular: paciente.nombreTitular,
      direccion: paciente.direccion,
      telefono: paciente.telefono,
      nombreMascota: paciente.nombreMascota,
      tipoMascota: paciente.tipoMascota,
      razaMascota: paciente.razaMascota,
      edadMascota: paciente.edadMascota,
      comentarios: paciente.comentarios,
    };
    const res = await axios.post(
      "http://localhost:8081/api/health-control/v1/pacientes",
      nw
    );

    setloading(false);
    window.location.href = "/NewPaciente";
  };

  /*   const handleSubmit = async (e) => {
          e.preventDefault();
  
          const res = await fetch("http://localhost:8081/api/health-control/v1/pacientes", {
              method: "POST",
              body: JSON.stringify(paciente)
          })
          const data = await res.json()
          console.log(data)
      } */

  const handleChange = (e) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
    console.log(paciente);
  };
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={4}>
          <Card sx={{ mt: 15 }}>
            <Typography variant="5" textAlign="center" justifyContent="center">
              <h1>Igresar Datos</h1>
            </Typography>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="filled"
                  label="Cedula"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="cedula"
                  onChange={handleChange}
                  value={paciente.cedula}
                />
                <TextField
                  variant="filled"
                  label="Propietario"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="nombreTitular"
                  onChange={handleChange}
                  value={paciente.nombreTitular}
                />
                <TextField
                  variant="filled"
                  label="Direccion"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="direccion"
                  onChange={handleChange}
                  value={paciente.direccion}
                />
                <TextField
                  variant="filled"
                  label="Telefono"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="telefono"
                  onChange={handleChange}
                  value={paciente.telefono}
                />
                <TextField
                  variant="filled"
                  label="Nombre de la Mascota"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="nombreMascota"
                  onChange={handleChange}
                  value={paciente.nombreMascota}
                />
                <TextField
                  variant="filled"
                  label="Especie"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="tipoMascota"
                  onChange={handleChange}
                  value={paciente.tipoMascota}
                />
                <TextField
                  variant="filled"
                  label="Raza"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="razaMascota"
                  onChange={handleChange}
                  value={paciente.razaMascota}
                />
                <TextField
                  variant="filled"
                  label="Edad"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="edadMascota"
                  onChange={handleChange}
                  value={paciente.edadMascota}
                />

                <TextField
                  variant="outlined"
                  label="Observaciones"
                  multiline
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                    width: 400,
                  }}
                  name="comentarios"
                  onChange={handleChange}
                  value={paciente.comentarios}
                />
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  disabled={!paciente.cedula || !paciente.comentarios}
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={30} />
                  ) : (
                    "Guardar"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
