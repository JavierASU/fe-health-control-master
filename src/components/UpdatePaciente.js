import React, { useState } from "react";
import {
  Modal,
  Form,
  ModalBody,
  FormGroup,
  FormControl,
  FormText,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const UpdatePaciente = (props) => {
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
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nw = {
      // id: paciente.id,
      //cedula: paciente.cedula,
      nombreTitular: paciente.nombreTitular,
      direccion: paciente.direccion,
      telefono: paciente.telefono,
      nombreMascota: paciente.nombreMascota,
      tipoMascota: paciente.tipoMascota,
      razaMascota: paciente.razaMascota,
      edadMascota: paciente.edadMascota,
      comentarios: paciente.comentarios,
    };
    const res = await axios.put(
      "http://localhost:8081/api/health-control/v1/pacientes/" + id,
      nw
    );

    window.location.href = "/Pacientes";
  };

  const handleChange = (e, valueName, setPaciente) => {
    let value = e.target.value;
    setPaciente((paciente) => ({
      ...paciente,
      [valueName]: value,
    }));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [paciente, setPaciente] = useState({
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

  return (
    <div>
      <Button>
        <CreateIcon
          sx={{ color: yellow[900] }}
          onClick={handleShow}
        ></CreateIcon>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>Actualizar Datos: {id}</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormText>Cedula</FormText>
            <FormControl
              disabled={true}
              type="text"
              value={paciente.cedula}
              onChange={(e) => handleChange(e, "cedula", setPaciente)}
            ></FormControl>
            <FormGroup>
              <Form.Text>Prpietario</Form.Text>
              <Form.Control
                required
                type="text"
                value={paciente.nombreTitular}
                onChange={(e) => handleChange(e, "nombreTitular", setPaciente)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Text>Direccion</Form.Text>
              <Form.Control
                required
                type="text"
                value={paciente.direccion}
                onChange={(e) => handleChange(e, "direccion", setPaciente)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Text>Telefono</Form.Text>
              <Form.Control
                required
                type="text"
                value={paciente.telefono}
                onChange={(e) => handleChange(e, "telefono", setPaciente)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Text>Nombre de la Mascota</Form.Text>
              <Form.Control
                required
                type="text"
                value={paciente.nombreMascota}
                onChange={(e) => handleChange(e, "nombreMascota", setPaciente)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Text>Especie</Form.Text>
              <Form.Control
                required
                type="text"
                value={paciente.tipoMascota}
                onChange={(e) => handleChange(e, "tipoMascota", setPaciente)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Text>Raza</Form.Text>
              <Form.Control
                required
                type="text"
                value={paciente.razaMascota}
                onChange={(e) => handleChange(e, "razaMascota", setPaciente)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Text>Edad</Form.Text>
              <Form.Control
                required
                type="text"
                value={paciente.edadMascota}
                onChange={(e) => handleChange(e, "edadMascota", setPaciente)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Text>Observaciones</Form.Text>
              <Form.Control
                required
                type="text"
                value={paciente.comentarios}
                onChange={(e) => handleChange(e, "comentarios", setPaciente)}
              />
            </FormGroup>
            <Button variant="contained" type="submit" color="success">
              Actualizar
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
