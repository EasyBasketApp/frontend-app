import React from 'react'
import { Team } from '../../types/api/teams'
import { Box } from '@mui/system'
import NoTeamContent from './NoTeamContent'
import TeamCard from './TeamCard'

interface TeamCardContentProps {
  teams: Team[]
  onCreateTeam: () => void
}

export default function TeamCardContent({ teams, onCreateTeam }: TeamCardContentProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr',
        },
        gap: 4,
      }}
    >
      {teams && teams.length > 0 ? (
        teams.map((team, index) => <TeamCard key={team.id} team={team} index={index} />)
      ) : (
        <NoTeamContent onCreateTeam={onCreateTeam} />
      )}
    </Box>
  )
}
