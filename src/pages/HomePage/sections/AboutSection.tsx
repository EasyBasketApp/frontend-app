import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import * as data from '../data'

const AboutSection: React.FC = () => (
  <Box
    sx={{
      py: { xs: 6, md: 10 },
      background: theme => theme.palette.background.default,
    }}
  >
    <Container maxWidth='md'>
      <Typography variant='h2' align='center' gutterBottom sx={{ fontWeight: 700 }}>
        {data.about.title}
      </Typography>
      <Typography variant='body1' align='center' color='text.secondary' sx={{ maxWidth: 700, mx: 'auto' }}>
        {data.about.description}
      </Typography>
    </Container>
  </Box>
)

export default AboutSection
