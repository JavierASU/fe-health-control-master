import React, { useState, useEffect } from "react";
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

export default function VerHistorialModal(props) {
  const { id } = props;
  const [loading, setloading] = useState(false);
  const [historial, setHistorial] = useState({
    id: 0,
    data: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function loadData() {
      const result = await axios.get(
        `http://localhost:8081/api/health-control/v1/historiales/${id}`
      );
      setHistorial((state) => ({
        ...state,
        id: result.data.id,
        data: result.data.data,
      }));
    }
    loadData();
  }, [setHistorial, id]);
  return (
    <div>
      <Button onClick={() => handleShow()}>Ver</Button>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>Detalle Historial: {id}</ModalHeader>
        <ModalBody>
          <Form>
            <FormControl
              disabled={true}
              type="textarea"
              value={historial.data}
            ></FormControl>
            <Button variant="contained" type="submit" color="success">
              Actualizar
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
