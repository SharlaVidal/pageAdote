import { Box, Typography, Grid } from '@mui/material';

export default function PorQueAdotar() {
  const itens = [
    {
      imagem: '/images/3741725.svg', // Substituir pelo caminho correto da imagem
      titulo: 'Agora mesmo',
      descricao: 'existem milhares de animais esperando um novo dono para chamar de seu.',
    },
    {
      imagem: '/images/3761522.svg', // Substituir pelo caminho correto da imagem
      titulo: 'A maior felicidade é',
      descricao: 'poder dar amor e cuidado para esses seres tão inocentes e dóceis.',
    },
    {
      imagem: '/images/dog_box_heart_06-Convertido.svg', // Substituir pelo caminho correto da imagem
      titulo: 'Faça a diferença hoje',
      descricao: 'mude o destino de um desses pets pra melhor junto com você!',
    },
  ];

  return (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'purple', fontWeight: 'bold' }}>
        Por que adotar?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {itens.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={item.imagem} alt={item.titulo} style={{ maxWidth: '100px', marginBottom: '16px' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {item.titulo}
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray' }}>
                {item.descricao}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
