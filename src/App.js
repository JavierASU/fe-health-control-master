import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import NewPaciente from "./components/Newpaciente";
import Pacientes from "./components/Pacientes";
import Navbar from "./components/Navbar";
import Welcome from "./Start/Welcome";

function App() {
  return (
    <BrowserRouter>
      
      <Container>
        <Routes>
          <Route path="/NewPaciente" element={<NewPaciente />} />
          <Route path="/Pacientes" element={<Pacientes />} />
          <Route path="/:id"element={<Pacientes/>}/>
          <Route path="/" element={<Welcome/>}/>

          
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
