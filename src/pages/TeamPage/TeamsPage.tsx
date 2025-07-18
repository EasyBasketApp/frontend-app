import { Alert, Box, CircularProgress, Container } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { useTeams } from '../../hooks/api/teams'
import TeamCardContent from './TeamPageContent'
import TeamPageHeader from './TeamPageHeader'

const TeamsPage: React.FC = () => {
  const { data: teams, isLoading, error } = useTeams()

  if (isLoading) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress size={60} />
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ minHeight: '100vh', py: 4 }}>
        <Container maxWidth='lg'>
          <Alert severity='error' sx={{ mb: 4 }}>
            Failed to load teams. Please try again later.
          </Alert>
        </Container>
      </Box>
    )
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth='lg'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box sx={{ mb: 6 }}>
            <TeamPageHeader />
            <TeamCardContent teams={teams || []} />
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default TeamsPage
