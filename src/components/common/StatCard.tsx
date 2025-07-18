import React from 'react'
import { Paper, Typography } from '@mui/material'
import { motion } from 'framer-motion'

interface StatCardProps {
  stat: {
    number: string
    label: string
    description: string
  }
  index: number
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
      whileHover={{ scale: 1.08, y: -8 }}
    >
      <Paper
        elevation={0}
        sx={{
          textAlign: 'center',
          p: { xs: 3, md: 4 },
          borderRadius: 6,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(30px)',
          border: '2px solid rgba(255, 255, 255, 0.15)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 10px 40px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.15)',
            transform: 'translateY(-4px)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 20px 60px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <Typography
          variant='h2'
          component='div'
          sx={{
            fontWeight: 900,
            mb: 2,
            color: '#ffffff',
            fontSize: { xs: '3rem', md: '4rem' },
            lineHeight: 1,
            textShadow: '0 3px 15px rgba(0, 0, 0, 0.4)',
          }}
        >
          {stat.number}
        </Typography>
        <Typography
          variant='h6'
          component='div'
          sx={{
            color: '#ffffff',
            fontWeight: 700,
            mb: 1,
            opacity: 0.95,
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          {stat.label}
        </Typography>
        <Typography
          variant='body2'
          sx={{
            color: '#ffffff',
            opacity: 0.8,
            fontSize: { xs: '0.75rem', md: '0.875rem' },
            lineHeight: 1.4,
          }}
        >
          {stat.description}
        </Typography>
      </Paper>
    </motion.div>
  )
}

export default StatCard
