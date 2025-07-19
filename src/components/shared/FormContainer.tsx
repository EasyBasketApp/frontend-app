import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'

type FormContainerProps = {
  title: string
  subtitle: string
  icon: React.ReactNode
  children: React.ReactNode
}

export default function FormContainer({ title, subtitle, icon, children }: FormContainerProps) {
  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              p: 3,
              textAlign: 'center',
            }}
          >
            {icon}
            <Typography variant='h4' component='h1' gutterBottom>
              {title}
            </Typography>
            <Typography variant='body1' sx={{ opacity: 0.9 }}>
              {subtitle}
            </Typography>
          </Box>
          {children}
        </Paper>
      </Box>
    </Container>
  )
}
