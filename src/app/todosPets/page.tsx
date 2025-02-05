"use client";

import React, { useState, useEffect } from 'react';
import PetsPage from '../components/PetsPage';
import { Modal, Box, Typography, CircularProgress } from '@mui/material';
import PetSearch from '../components/PetSearch';

const TodosOsPets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  // Função para buscar os dados da API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/posts'); 
        if (!response.ok) {
          throw new Error('Erro ao buscar pets');
        }
        const data = await response.json();
        setPets(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const handleOpen = (pet: any) => {
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
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <PetsPage pets={pets} onCardClick={handleOpen} />
      )}

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
                src={selectedPet.photoUrl}
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
