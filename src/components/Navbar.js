
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';


export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" color="transparent">
                    <Container >
                        <Toolbar>
                            <Button><HomeIcon sx={{ fontSize: 40 }} onClick={() => navigate("/")}/></Button>
                            <Typography sx={{ flexGrow: 1 }} variant='h4' >
                                
                                <Link to="/Pacientes" style={{ textDecoration: "none", color: "white" }}>Mascotas Del Centro</Link>
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={() => navigate("/NewPaciente")}>Crear Nuevo Paciente</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </div>
    )
}
