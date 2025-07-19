import React from 'react'
import { Add } from '@mui/icons-material'
import { Typography, Button } from '@mui/material'
import { Box } from '@mui/system'

interface NoTeamContentProps {
  onCreateTeam: () => void
}

export default function NoTeamContent({ onCreateTeam }: NoTeamContentProps) {
  return (
    <Box sx={{ gridColumn: '1 / -1', textAlign: 'center', py: 8 }}>
      <Typography variant='h6' color='text.secondary' gutterBottom>
        No teams found
      </Typography>
      <Typography variant='body2' color='text.secondary' sx={{ mb: 4 }}>
        Create your first team to get started with managing your basketball organization.
      </Typography>
      <Button
        variant='contained'
        startIcon={<Add />}
        onClick={onCreateTeam}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          px: 4,
          py: 1.5,
        }}
      >
        Create Your First Team
      </Button>
    </Box>
  )
}
