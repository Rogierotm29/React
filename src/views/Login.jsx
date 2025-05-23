import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (userInput === 'Rogierotm20' && password === '1234') {
      setUsername(userInput);
      navigate('/home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <TextField
            label="Usuario"
            variant="outlined"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
