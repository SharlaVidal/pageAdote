import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { Facebook, Instagram, WhatsApp, MailOutline } from '@mui/icons-material';

const Footer: React.FC = () => {
  // URLs das redes sociais
  const instagramURL = "https://www.instagram.com/seuperfil";
  const facebookURL = "https://www.facebook.com/seuperfil";
  const whatsappURL = "https://wa.me/seunumerodetelefone"; // Link do WhatsApp
  const emailURL = "mailto:seuemail@example.com"; // Email

  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        marginTop: 'auto', // Garante que o footer fique na parte inferior da página
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '10px' }}>
          Desenvolvido com ❤️ por Sharla Vidal
        </Typography>

        {/* Seção de Redes Sociais */}
        <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton 
            href={instagramURL} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram sx={{ fontSize: 30, color: 'white' }} />
          </IconButton>

          <IconButton 
            href={facebookURL} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook sx={{ fontSize: 30, color: 'white' }} />
          </IconButton>

          <IconButton 
            href={whatsappURL} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsApp sx={{ fontSize: 30, color: 'white' }} />
          </IconButton>

          <IconButton 
            href={emailURL} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MailOutline sx={{ fontSize: 30, color: 'white' }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
