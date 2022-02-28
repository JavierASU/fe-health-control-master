import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  Table,
  ButtonGroup,
  FormControl,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { red, yellow } from "@mui/material/colors";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UpdatePaciente } from "./UpdatePaciente";
import Navbar from "../components/Navbar";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import { Historial } from "./Historial";


export default function Pacientes() {
  const navigate = useNavigate();
  const params = useParams();

  const [pacientes, setPacientes] = useState([]);
  const [buscar, setBuscar] = useState("")

  const cargarPaciente = async () => {
    const res = await axios.get(
      "http://localhost:8081/api/health-control/v1/pacientes?cedula=" + buscar
    );

    setPacientes(res.data);
  };

  const handleChange = (e) => {
    setBuscar(e.target.value)

  };

  const deleteInf = async (id) => {
    await axios.delete(
      "http://localhost:8081/api/health-control/v1/pacientes/" + id
    );
    window.location.href = "/Pacientes";
  };

  return (
    <div>
      <Navbar />

      <TableContainer
        component={Paper}
        sx={{ mt: 5 }}
        style={{ backgroundColor: "#1e272e" }}
      >
        <Typography
          variant="5"
          textaling="center"
          justifyContent="center"
          color={"white"}
        >
          <h3>Lista de Pacientes</h3>
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <FormControl>
              <TextField
                variant="outlined"
                label="Buscar"
                onChange={handleChange}
                value={buscar}
                sx={{
                  display: "-ms-inline-flexbox",
                  margin: ".5rem 0",
                }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}>

              </TextField>
              <Button onClick={() => cargarPaciente()}>buscar</Button>
            </FormControl>
            <TableRow>
              <TableCell aling="aling">
                <Typography color={"white"}>Cedula</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Propietario</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Direccion</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Telefono</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Nombre Mascota</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Especie</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Raza</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Edad</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Observaciones</Typography>
              </TableCell>
              <TableCell aling="aling">
                <Typography color={"white"}>Opciones</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pacientes.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" class="tema-fond">
                  {row.cedula}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  {row.nombreTitular}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  {row.direccion}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  {row.telefono}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  {row.nombreMascota}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  {row.tipoMascota}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  {row.razaMascota}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  {row.edadMascota}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  {row.comentarios}
                </TableCell>
                <TableCell class="tema-fond" aling="aling">
                  <div>
                    <ButtonGroup
                      variant=""
                      aria-label="outlined button group"
                      size="small"
                    >
                      <UpdatePaciente row={row} />
                      <Historial row={row} />

                      <IconButton
                        variant="outlined"
                        aria-label="delete"
                        size="short"
                        onClick={() => deleteInf(row.id)}
                      >
                        <DeleteIcon
                          fontSize="inherit"
                          onClick={() => deleteInf(row.id)}
                          sx={{ color: red[900], }}
                        />
                      </IconButton>
                      <SnippetFolderIcon onClick={() => navigate(`/Historiales/${row.id}`)}
                        sx={{ color: yellow[800], width: 80, marginTop: 1 }}
                        fontSize="medium"
                      ></SnippetFolderIcon>
                    </ButtonGroup>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div></div>
    </div>
  );
}
