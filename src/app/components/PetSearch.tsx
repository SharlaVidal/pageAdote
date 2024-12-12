import { useState } from 'react';
import { TextField, MenuItem, FormControl, Select, InputLabel, Button, Grid, Box, Typography } from '@mui/material';

const PetSearch = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');

  const handleSearch = () => {
    console.log('Busca filtrada por: ', { state, city, gender, age, size });
  };

  return (
    <Box sx={{ backgroundColor: '#6a1b9a', padding: '20px', textAlign: 'center', color: 'white' }}>
      <Typography variant="h4" gutterBottom>
        Encontre seu novo melhor amigo(a)
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Input de nome */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Digite o nome do pet"
            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
          />
        </Grid>

        {/* Select Estado */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel sx={{ backgroundColor: 'white', px: 1 }}>Todos os Estados</InputLabel>
            <Select
              value={state}
              onChange={(e) => setState(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            >
              <MenuItem value="">Mostrar Todos</MenuItem>
              {/* Adicionar opções de estados */}
            </Select>
          </FormControl>
        </Grid>

        {/* Select Cidade */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel sx={{ backgroundColor: 'white', px: 1 }}>Todas as Cidades</InputLabel>
            <Select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            >
              <MenuItem value="">Mostrar Todos</MenuItem>
              {/* Adicionar opções de cidades */}
            </Select>
          </FormControl>
        </Grid>

        {/* Select Sexo */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel sx={{ backgroundColor: 'white', px: 1 }}>Sexo</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            >
              <MenuItem value="">Mostrar Todos</MenuItem>
              <MenuItem value="femea">Fêmea</MenuItem>
              <MenuItem value="macho">Macho</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Select Idade */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel sx={{ backgroundColor: 'white', px: 1 }}>Idade</InputLabel>
            <Select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            >
              <MenuItem value="">Mostrar Todos</MenuItem>
              <MenuItem value="adulto">Adulto</MenuItem>
              <MenuItem value="filhote">Filhote</MenuItem>
              <MenuItem value="senior">Sênior</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Select Porte */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel sx={{ backgroundColor: 'white', px: 1 }}>Porte</InputLabel>
            <Select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            >
              <MenuItem value="">Mostrar Todos</MenuItem>
              <MenuItem value="pequeno">Pequeno Porte</MenuItem>
              <MenuItem value="medio">Médio Porte</MenuItem>
              <MenuItem value="grande">Grande Porte</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px' }}>
        <Button variant="contained" onClick={handleSearch}>
          Buscar
        </Button>
      </Box>
    </Box>
  );
};

export default PetSearch;
