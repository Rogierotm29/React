import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { username } = useContext(UserContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (username) {
      console.log(`Bienvenido, ${username}`);
    }
  }, [username]);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          Hola {username || 'Visitante'} 👋
        </Typography>
        <Typography variant="body1" gutterBottom>
          Este es tu contador personal:
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          {count}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }}>
          <Button variant="contained" color="success" onClick={() => setCount(count + 1)}>
            Sumar
          </Button>
          <Button variant="contained" color="error" onClick={() => setCount(count - 1)}>
            Restar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
