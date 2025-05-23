import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          Acerca de esta aplicación
        </Typography>
        <Typography variant="body1">
          Esta aplicación fue desarrollada con React, utilizando React Router para la navegación, Material UI para el diseño, y useContext para manejar el usuario autenticado globalmente. 
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Fue creada como parte del módulo de desarrollo web en la materia de Construcción de Software y Toma de Decisiones.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
