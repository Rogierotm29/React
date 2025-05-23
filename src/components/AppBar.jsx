import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Divider,
  Container
} from '@mui/material';
import { UserContext } from '../context/UserContext';

const AppBar = () => {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUsername('');
    navigate('/login');
  };

  return (
    <MuiAppBar position="static" color="default" sx={{ boxShadow: 2 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontFamily: 'Inter, sans-serif' }}>
            Bienvenido {username || 'Visitante'}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button component={Link} to="/home" color="inherit">
              Inicio
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button component={Link} to="/about" color="inherit">
              Acerca de
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button onClick={handleLogout} color="inherit">
              Salir
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
