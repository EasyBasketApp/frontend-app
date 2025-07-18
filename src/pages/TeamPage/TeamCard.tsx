import React from 'react'
import { Card, CardContent, Avatar, Typography, Chip } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { motion } from 'framer-motion'
import { Team, TeamRoleEnum } from '../../types/api/teams'

interface TeamCardProps {
  team: Team
  index: number
}

const getTeamAvatar = (name: string) => {
  return name.charAt(0).toUpperCase()
}

// Helper function to get gradient color based on team name or use default
const getTeamGradient = (name: string, color?: string) => {
  if (color) {
    return `linear-gradient(135deg, ${color} 0%, ${color}80 100%)`
  }
  // Default gradients based on team name
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
    'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
  ]
  return gradients[name.length % gradients.length]
}

export default function TeamCard({ team, index }: TeamCardProps) {
  const gradient = getTeamGradient(team.name, team.color)
  const avatar = getTeamAvatar(team.name)
  const players = team.members.length
  const isTeamAdmin = team.currentUserRole === TeamRoleEnum.ADMIN

  return (
    <motion.div
      key={team.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card
        sx={{
          height: '100%',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              sx={{
                background: gradient,
                width: 56,
                height: 56,
                mr: 2,
                fontSize: '1.5rem',
                fontWeight: 700,
              }}
            >
              {avatar}
            </Avatar>
            <Typography variant='h5' sx={{ fontWeight: 600 }}>
              {team.name}
            </Typography>
          </Box>

          <Stack direction='row' spacing={1} sx={{ mb: 3 }}>
            <Chip
              label={`${team.currentUserRole}`}
              variant={isTeamAdmin ? 'filled' : 'outlined'}
              color={isTeamAdmin ? 'primary' : 'secondary'}
            />
            <Chip label={`${players} player${players > 1 ? 's' : ''}`} variant='outlined' />
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  )
}
