import { Add } from '@mui/icons-material'
import { Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function TeamPageHeader() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography variant='h3' component='h1' sx={{ fontWeight: 700 }}>
          Teams Management
        </Typography>
        <Button
          variant='contained'
          startIcon={<Add />}
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            px: 4,
            py: 1.5,
          }}
        >
          Create Team
        </Button>
      </Box>

      <Typography variant='h6' color='text.secondary' sx={{ mb: 6 }}>
        Manage your basketball teams with advanced analytics and performance tracking
      </Typography>
    </>
  )
}
