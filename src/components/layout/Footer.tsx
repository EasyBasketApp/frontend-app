import React from 'react'
import { Box, Container, Typography, Link, Divider } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant='h6' color='primary' gutterBottom>
              BasketEasy
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Simplifying basketball team management
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Link
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              color='inherit'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <GitHub />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              color='inherit'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <LinkedIn />
            </Link>
            <Link href='mailto:contact@basketeasy.com' color='inherit' sx={{ display: 'flex', alignItems: 'center' }}>
              <Email />
            </Link>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant='body2' color='text.secondary'>
            © {new Date().getFullYear()} BasketEasy. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href='/privacy' variant='body2' color='text.secondary'>
              Privacy Policy
            </Link>
            <Link href='/terms' variant='body2' color='text.secondary'>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
