import React from 'react'
import { ButtonBase, Grid, Typography, Container } from "@mui/material";
import IMG1 from "../Img/4.jpg";
import IMG4 from "../Img/IMG4.jpg";
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';





export default function Welcome() {
    const navigate = useNavigate()
    return (
        <div >
            <Container >
                <Grid container alignItems="center" justifyItems="center" direction="column" sx={{ mt: 10 }}
                >
                    <Typography color={"white"} className='span' variant='h4'>Bienvenido a Mascotas Del centro</Typography>
                    <img src={IMG4} className='img1' />
                    <ButtonBase className='button'  onClick={() => navigate("/Pacientes")}><Typography variant='h5' color={"white"}>Continuar</Typography><ArrowForwardIosIcon color={"white"}></ArrowForwardIosIcon></ButtonBase>
                </Grid>
            </Container>
            <div>
                <Grid sx={{ mt: 2 }}>
                    <h6>Desing: By J&J</h6>
                </Grid>
            </div>
        </div>


    )
}
