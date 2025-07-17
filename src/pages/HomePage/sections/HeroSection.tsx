import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import * as data from "../data";

const HeroSection: React.FC = () => (
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      textAlign: "center",
      background: (theme) => theme.palette.background.default,
    }}
  >
    <Container maxWidth="md">
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 800 }}>
        {data.hero.title}
      </Typography>
      <Typography variant="h4" color="primary" gutterBottom>
        {data.hero.tagline}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {data.hero.description}
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="primary"
        sx={{
          borderRadius: 8,
          px: 6,
          py: 2,
          fontWeight: 700,
          fontSize: "1.2rem",
          boxShadow: 3,
        }}
        href="#features"
      >
        {data.hero.cta}
      </Button>
    </Container>
  </Box>
);

export default HeroSection;
