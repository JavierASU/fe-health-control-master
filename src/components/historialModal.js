import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  Modal,
  TextField,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";
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
      const env = process.env.REACT_APP_ENV;
      const host =
        env === "PROD"
          ? process.env.REACT_APP_BFF_HOST
          : "http://localhost:8081";
      const result = await axios.get(
        `${host}/api/health-control/v1/historiales/${id}`
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
      <Modal open={show} onClose={handleClose}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <Card
              sx={{ mt: 5 }}
              style={{
                backgroundColor: "#1E272E",
                padding: "1rem",
              }}
            >
              <Typography variant="h4" textAlign="center" color="white">
                Crear Historial
              </Typography>
              <Typography color={"white"} textAlign="center">
                HISTORIAL #-{id}
              </Typography>

              <CardContent>
                <FormControl>
                  <TextField
                    required={true}
                    maxRows={15}
                    aria-label="maximum height"
                    style={{ width: 1000 }}
                    name="informe"
                    value={historial.data}
                    variant="outlined"
                    label="Agregar Historial"
                    multiline
                    sx={{ m: 1, mt: 3, width: "100ch" }}
                    name="comentarios"
                    inputProps={{ style: { color: "white" } }}
                    InputLabelProps={{ style: { color: "white" } }}
                  ></TextField>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
