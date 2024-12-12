import { Box, Typography, Button } from '@mui/material';
import { Stack } from '@mui/system';

export default function Colabore() {
  return (
    <Box sx={{ textAlign: 'center', py: 6 ,   overflow: 'hidden',}}>
      <Typography variant="h4" gutterBottom sx={{ color: 'purple', fontWeight: 'bold' }}>
        Colabore financeiramente para manter esse projeto online!
      </Typography>
      <Typography variant="body1" sx={{ color: 'gray', mb: 4 }}>
        Toda a receita arrecadada é usada para a manutenção e melhoria de nossos serviços.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <img
          src="/images/money.png" // Substituir pelo caminho correto da imagem
          alt="Dinheiro"
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%) rotate(-10deg)',
            maxWidth: '300px',
            opacity: 0.2, // Torna a imagem mais sutil
            zIndex: -1, // Mantém a imagem atrás do conteúdo
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: 'purple',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px 20px',
            '&:hover': { backgroundColor: '#7a4b9e' },
          }}
        >
          <span style={{ marginRight: '8px' }}>💰</span> Quero Colaborar $
        </Button>
      </Stack>
    </Box>
  );
}
