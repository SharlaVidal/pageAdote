// src/app/components/Header.tsx
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #ddd' , background:'#3FBADD'}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <img src="/images/Logo.jpg" alt="Amigo Pet" style={{ height: 40, marginRight: 8 }} />
          <Typography variant="h6" color="primary">
            Amigo Pet
          </Typography>
        </Box>

        {/* Menu */}
        <Box display="flex" gap={3}>
          <Button component={Link} href="/" sx={{ color: '#653d96' , fontWeight: 'bold' }}>
            Home
          </Button>
          <Button component={Link} href="/todosPets" sx={{ color: '#653d96', fontWeight: 'bold'  }}>
            Todos os Pets
          </Button>
          <Button component={Link} href="/doar" sx={{ color: '#653d96',fontWeight: 'bold'  }}>
            Doar $
          </Button>
          <Button component={Link} href="/contato" sx={{ color: '#653d96' ,fontWeight: 'bold' }}>
            Contato
          </Button>
          <Button component={Link} href="/admin/dashboard" sx={{ color: '#653d96',fontWeight: 'bold'  }}>
            Dashboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
