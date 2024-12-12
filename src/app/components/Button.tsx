import React from "react";
import { Button, Box } from "@mui/material";


const Page = () => {
  return (
  
      <Box
        sx={{
          display: "flex",
          gap: 2, // Espaçamento entre os botões
          justifyContent: "center",
          mt:'3em'
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "#6A1B9A",
            ":hover": { backgroundColor: "#7B1FA2" },
          }}
          startIcon={<span role="img" aria-label="like">👍</span>}
        >
          Quero Adotar um Pet
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          sx={{
            borderColor: "#6A1B9A",
            color: "#6A1B9A",
            ":hover": { borderColor: "#7B1FA2", color: "#7B1FA2" },
          }}
          startIcon={<span role="img" aria-label="megaphone">📢</span>}
        >
          Quero Contribuir $
        </Button>
      </Box>
    
  );
};

export default Page;
