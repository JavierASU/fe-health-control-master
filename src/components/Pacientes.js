import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
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
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { red, yellow } from '@mui/material/colors';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UpdatePaciente } from './UpdatePaciente';
import Navbar from "../components/Navbar";

export default function Pacientes() {
    const navigate = useNavigate();
    const params = useParams();

    const [pacientes, setPacientes] = useState([]);

    const cargarPaciente = async () => {
        const response = await fetch(
            "http://localhost:8081/api/health-control/v1/pacientes"
        );
        const data = await response.json();
        setPacientes(data);
    };

    useEffect(() => {
        cargarPaciente();
        return () => { };
    }, []);

    const deleteInf = async (id) => {
        await axios.delete(
            "http://localhost:8081/api/health-control/v1/pacientes/" + id
        );
        window.location.href = "/";
    };

    return (
        <div >
            <Navbar />

            <TableContainer
                component={Paper}
                sx={{ mt: 5 }}
                style={{ backgroundColor: "#1e272e" }}
            >
                <Typography variant="5" textAlign="center" justifyContent="center" color={"white"}>
                    <h3>Historico</h3>
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table"  >
                    <TableHead>
                        <TableRow >
                            <TableCell align="aling" ><Typography color={"white"}>Cedula</Typography></TableCell>
                            <TableCell align="aling"><Typography color={"white"}>Propietario</Typography></TableCell>
                            <TableCell align="aling"><Typography color={"white"}>Direccion</Typography></TableCell>
                            <TableCell align="aling"><Typography color={"white"}>Telefono</Typography></TableCell>
                            <TableCell aling="aling"><Typography color={"white"}>Nombre Mascota</Typography></TableCell>
                            <TableCell align="aling"><Typography color={"white"}>Especie</Typography></TableCell>
                            <TableCell align="aling"><Typography color={"white"}>Raza</Typography></TableCell>
                            <TableCell align="aling"><Typography color={"white"}>Edad</Typography></TableCell>
                            <TableCell align="aling"><Typography color={"white"}>Observaciones</Typography></TableCell>
                            <TableCell align="aling"><Typography color={"white"}>Opciones</Typography></TableCell>
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
                                <TableCell class="tema-fond" align="aling">{row.nombreTitular}</TableCell>
                                <TableCell class="tema-fond" align="aling">{row.direccion}</TableCell>
                                <TableCell class="tema-fond" align="aling">{row.telefono}</TableCell>
                                <TableCell class="tema-fond" align="aling">{row.nombreMascota}</TableCell>
                                <TableCell class="tema-fond" align="aling">{row.tipoMascota}</TableCell>
                                <TableCell class="tema-fond" align="aling">{row.razaMascota}</TableCell>
                                <TableCell class="tema-fond" align="aling">{row.edadMascota}</TableCell>
                                <TableCell class="tema-fond" align="aling">{row.comentarios}</TableCell>
                                <TableCell class="tema-fond" align="aling">
                                    <div>
                                        <ButtonGroup
                                            variant=""
                                            aria-label="outlined button group"
                                            size="small"
                                        >
                                            <UpdatePaciente row={row} />
                                            <Button><DescriptionOutlinedIcon></DescriptionOutlinedIcon></Button>
                                            <IconButton
                                                variant="outlined"
                                                aria-label="delete"
                                                size="short"
                                                onClick={() => deleteInf(row.id)}
                                            >
                                                <DeleteIcon
                                                    fontSize="inherit"
                                                    onClick={() => deleteInf(row.id)}
                                                    sx={{ color: red[900] }}
                                                />
                                            </IconButton>
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
