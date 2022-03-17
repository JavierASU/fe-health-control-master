import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";
import VerHistorialModal from "./historialModal";
import Navbar from "../components/Navbar";

export default function Historiales() {
  const [historiales, setHistoriales] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function loadData() {
      const env = process.env.REACT_APP_ENV;
      const host =
        env === "PROD"
          ? process.env.REACT_APP_BFF_HOST
          : "http://localhost:8081";
      const result = await axios.get(
        `${host}/api/health-control/v1/pacientes/${id}`
      );
      setHistoriales(result.data.historiales);
    }
    loadData();
  }, [setHistoriales, id]);

  const deleteInf = async (id) => {
    const env = process.env.REACT_APP_ENV;
    const host =
      env === "PROD" ? process.env.REACT_APP_BFF_HOST : "http://localhost:8081";
    await axios.delete(`${host}/api/health-control/v1/historiales/${id}`);
    window.location.href = "/Historiales";
  };
  return (
    <div>
      <Navbar />
      <h1>Historiales</h1>
      <h2>Paciente - {id}</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Fecha de Creación</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!historiales.length ? (
              <></>
            ) : (
              historiales.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    {new Date(item.createdAt).toLocaleDateString()}-
                    {new Date(item.createdAt).toLocaleTimeString()}
                  </TableCell>
                  <TableCell>
                    <VerHistorialModal id={item.id} />
                    <Button onClick={() => deleteInf(item.id)}>Eliminar</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
