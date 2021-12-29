import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import NewPaciente from "./components/Newpaciente";
import Pacientes from "./components/Pacientes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/NewPaciente" element={<NewPaciente />} />
          <Route path="/" element={<Pacientes />} />
          <Route path="/:id"element={<Pacientes/>}/>

          
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
