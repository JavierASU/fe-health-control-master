import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import NewPaciente from "./components/Newpaciente";
import Pacientes from "./components/Pacientes";
import Welcome from "./Start/Welcome";
import Historial from "./components/Historial"

function App() {
  return (
    <BrowserRouter>

      <Container >
        <Routes>
          <Route path="/NewPaciente" element={<NewPaciente />} />
          <Route path="/Pacientes" element={<Pacientes />} />
          <Route path="/:id" element={<Pacientes />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/Historial" element={<Historial />} />


        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
