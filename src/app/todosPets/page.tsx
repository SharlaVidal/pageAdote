"use client";

import React, { useState } from 'react';
import PetsPage from '../components/PetsPage';
import { Modal, Box, Typography } from '@mui/material';
import PetSearch from '../components/PetSearch';

const TodosOsPets = () => {
  const [open, setOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const pets = [
    {
      id: 1,
      name: 'Bob',
      gender: 'MACHO',
      age: 'ADULTO',
      size: 'MÉDIO PORTE',
      location: 'JAGUARIÚNA, SP',
      image: 'https://lh6.googleusercontent.com/proxy/QnLIbxxN5bJbBGiEtrw-u38kM937ZsMoVwIfARGf8J8_uIu1cXcyr8bc8mD055xZ-C4cuKfYnvylRVwmG32StTiZnDcuHkHvWB9TI-fTjOX_kr1tjLSM6V6jvs5vj14W30y_1C0PhroGyyoRPRhWUvsqP7uSwA',
    },
    {
      id: 2,
      name: 'Cat Lavine',
      gender: 'FÊMEA',
      age: 'ADULTO',
      size: 'PEQUENO PORTE',
      location: 'AMPARO, SP',
      image: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/03/29114436/4-curiosidades-sobre-vira-latas-tipo-de-cao-que-protegeu-bebe-fujao.jpg',
    },
    {
      id: 3,
      name: 'Clotilde',
      gender: 'FÊMEA',
      age: 'FILHOTE',
      size: 'MÉDIO PORTE',
      location: 'AMPARO, SP',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFrD5O1T_y-ctTcoVx_GEup-jlVAMW2uf8w&s',
    },
    {
      id: 4,
      name: 'Cris',
      gender: 'FÊMEA',
      age: 'ADULTO',
      size: 'PEQUENO PORTE',
      location: 'ANGRA DOS REIS, RJ',
      image: 'https://blog-static.petlove.com.br/wp-content/uploads/2021/07/Cachorro-vira-lata-filhote-na-grama.jpg',
    },
  ];

  const handleOpen = (pet) => {
    setSelectedPet(pet);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPet(null);
  };

  return (
    <main>
      <PetSearch />
      <PetsPage pets={pets} onCardClick={handleOpen} />

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="pet-modal-title"
        aria-describedby="pet-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedPet && (
            <>
              <Typography id="pet-modal-title" variant="h6" component="h2">
                {selectedPet.name}
              </Typography>
              <img
                src={selectedPet.image}
                alt={selectedPet.name}
                style={{ width: '100%', borderRadius: '8px', marginTop: '16px' }}
              />
              <Typography id="pet-modal-description" sx={{ mt: 2 }}>
                {`${selectedPet.gender} | ${selectedPet.age} | ${selectedPet.size}`}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Localização: {selectedPet.location}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </main>
  );
};

export default TodosOsPets;
