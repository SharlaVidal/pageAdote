import { Box, TextField, Button, Typography, Grid, IconButton } from '@mui/material';
import { Phone, Email, LocationOn, WhatsApp } from '@mui/icons-material';

export default function Contato() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#6a1b9a', color: 'white', py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          <span role="img" aria-label="cat">🐱</span> Entre em Contato <span role="img" aria-label="dog">🐶</span>
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {/* Formulário */}
        <Grid item xs={12} md={6}>
          <Box component="form" autoComplete="off" sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, color: 'black' }}>
            <TextField 
              label="Nome" 
              fullWidth 
              variant="outlined" 
              margin="normal" 
              sx={{ '& .MuiOutlinedInput-root': { borderColor: '#6a1b9a' } }}
            />
            <TextField 
              label="E-mail" 
              fullWidth 
              variant="outlined" 
              margin="normal" 
            />
            <TextField 
              label="Whatsapp" 
              fullWidth 
              variant="outlined" 
              margin="normal" 
            />
            <TextField 
              label="Mensagem" 
              fullWidth 
              multiline 
              rows={4} 
              variant="outlined" 
              margin="normal" 
            />
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              sx={{ mt: 2, backgroundColor: '#fbc02d', '&:hover': { backgroundColor: '#ffa000' } }}
            >
              Enviar
            </Button>
          </Box>
        </Grid>

        {/* Informações de Contato */}
        <Grid item xs={12} md={4}>
          <Box sx={{ color: 'white' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <Phone />
              </IconButton>
              <Typography>(19) 3333-3333</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <WhatsApp />
              </IconButton>
              <Typography>(19) 9 9999-9999</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <Email />
              </IconButton>
              <Typography>email@email.com.br</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <LocationOn />
              </IconButton>
              <Typography>Rua de Exemplo, 55 - São Paulo - SP</Typography>
            </Box>
            <Box mt={4}>
              {/* Mapa */}
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.674580324614!2d-46.633382184885276!3d-23.55577108468352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzIwLjgiUyA0NsKwMzgnMTAuMiJX!5e0!3m2!1sen!2sbr!4v1635809040854!5m2!1sen!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
