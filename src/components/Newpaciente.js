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
import Navbar from "../components/Navbar";

export default function Newpaciente() {
  let navigate = useNavigate();

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
    const env = process.env.REACT_APP_ENV;
    const host =
      env === "PROD" ? process.env.REACT_APP_BFF_HOST : "http://localhost:8081";
    const res = await axios.post(`${host}/api/health-control/v1/pacientes`, nw);

    setloading(false);

    navigate("/Pacientes");
  };

  const handleChange = (e) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
    console.log(paciente);
  };
  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={4}>
          <Card
            sx={{ mt: 15 }}
            style={{
              backgroundColor: "#1E272E",
              padding: "1rem",
            }}
          >
            <Typography
              variant="5"
              textAlign="center"
              justifyContent="center"
              color="white"
            >
              <h1>Igresar Datos</h1>
            </Typography>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  label="Cedula"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="cedula"
                  onChange={handleChange}
                  value={paciente.cedula}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  variant="outlined"
                  label="Propietario"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="nombreTitular"
                  onChange={handleChange}
                  value={paciente.nombreTitular}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  variant="outlined"
                  label="Direccion"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="direccion"
                  onChange={handleChange}
                  value={paciente.direccion}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  variant="outlined"
                  label="Telefono"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="telefono"
                  onChange={handleChange}
                  value={paciente.telefono}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  variant="outlined"
                  label="Nombre de la Mascota"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="nombreMascota"
                  onChange={handleChange}
                  value={paciente.nombreMascota}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  variant="outlined"
                  label="Especie"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="tipoMascota"
                  onChange={handleChange}
                  value={paciente.tipoMascota}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  variant="outlined"
                  label="Raza"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="razaMascota"
                  onChange={handleChange}
                  value={paciente.razaMascota}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  variant="outlined"
                  label="Edad"
                  sx={{
                    display: "-ms-inline-flexbox",
                    margin: ".5rem 0",
                  }}
                  name="edadMascota"
                  onChange={handleChange}
                  value={paciente.edadMascota}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />

                <TextField
                  required={true}
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
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
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
