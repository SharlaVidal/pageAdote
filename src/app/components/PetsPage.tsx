import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Pet = {
  id: number;
  name: string;
  gender: string;
  age: string;
  size: string;
  location: string;
  photoUrl: string;
};

type PetsPageProps = {
  pets: Pet[];
  onCardClick: (pet: Pet) => void;
};

// Componente que renderiza um único pet
const PetCard = ({ pet, onCardClick }: { pet: Pet; onCardClick: (pet: Pet) => void }) => (
  <Card
    sx={{ maxWidth: 280, borderRadius: 2, boxShadow: 3, cursor: 'pointer' }}
    onClick={() => onCardClick(pet)}
  >
    <Box position="relative">
      <CardMedia
        component="img"
        height="200"
        image={pet.photoUrl}
        alt={pet.name}
      />
      <Chip
        label="Disponível"
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          backgroundColor: 'purple',
          color: 'white',
          fontWeight: 'bold',
        }}
      />
    </Box>
    <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
        {pet.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`${pet.gender} | ${pet.age} | ${pet.size}`}
      </Typography>
      <Box display="flex" alignItems="center" mt={1}>
        <LocationOnIcon fontSize="small" color="primary" />
        <Typography variant="body2" color="text.secondary" ml={0.5}>
          {pet.location}
        </Typography>
      </Box>
    </CardContent>
    <Box display="flex" justifyContent="flex-end" p={1}>
      <IconButton>
        <FavoriteBorderIcon color="error" />
      </IconButton>
    </Box>
  </Card>
);

// Componente que renderiza a grade de pets
const PetGrid = ({ pets, onCardClick }: PetsPageProps) => (
  <Box sx={{ padding: 4 }}>
    <Typography variant="h6" gutterBottom>
      Exibindo {pets.length} Pets por Página
    </Typography>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      No total foram encontrados {pets.length} pets disponíveis para adoção
    </Typography>
    <Grid container spacing={4}>
      {pets.map((pet) => (
        <Grid item xs={12} sm={6} md={3} key={pet.id}>
          <PetCard pet={pet} onCardClick={onCardClick} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

// Componente principal
const PetsPage = ({ pets, onCardClick }: PetsPageProps) => {
  return <PetGrid pets={pets} onCardClick={onCardClick} />;
};

export default PetsPage;
