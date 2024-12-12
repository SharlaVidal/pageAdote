import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const DonationOptions = () => {
  return (
    <><Box sx={{ minHeight: '15vh', backgroundColor: '#6a1b9a', color: 'white', py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          <span role="img" aria-label="cat">🐱</span> Entre em Contato <span role="img" aria-label="dog">🐶</span>
        </Typography>
      </Box>
    </Box><Box sx={{ textAlign: 'center', py: 4, px: 2 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Faça sua doação através de um desses meios de pagamento de sua preferência.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Cartão PIX */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 2, boxShadow: 3 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/Logo_Pix_%28Brasil%29.svg"
                alt="Pix"
                style={{ maxWidth: '80px', margin: '0 auto' }} />
              <CardContent>
                <Typography variant="subtitle1" color="primary" fontWeight="bold">
                  Doe via PIX
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Chave: E-mail
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  seupix@email.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Cartão PagSeguro */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 2, boxShadow: 3 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_PagSeguro.png/800px-Logo_PagSeguro.png"
                alt="PagSeguro"
                style={{ maxWidth: '80px', margin: '0 auto' }} />
              <CardContent>
                <Button variant="contained" color="primary" fullWidth>
                  Doar com PagSeguro
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Cartão Mercado Pago */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 2, boxShadow: 3 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/23/Mercado_Pago.png"
                alt="Mercado Pago"
                style={{ maxWidth: '80px', margin: '0 auto' }} />
              <CardContent>
                <Button variant="contained" color="primary" fullWidth>
                  Doar com Mercado Pago
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Cartão PayPal */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 2, boxShadow: 3 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                style={{ maxWidth: '80px', margin: '0 auto' }} />
              <CardContent>
                <Button variant="contained" color="primary" fullWidth>
                  Doar com Paypal
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box></>
  );
};

export default DonationOptions;
