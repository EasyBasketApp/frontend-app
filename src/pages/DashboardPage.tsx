import {
  Add,
  Dashboard as DashboardIcon,
  EmojiEvents,
  Event,
  Group,
  SportsBasketball,
  Timeline,
  TrendingUp,
  Whatshot,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const DashboardPage: React.FC = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const stats = [
    {
      title: 'Teams',
      value: '3',
      icon: <Group sx={{ fontSize: 40, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      change: '+12%',
      trend: 'up',
    },
    {
      title: 'Players',
      value: '45',
      icon: <SportsBasketball sx={{ fontSize: 40, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      change: '+8%',
      trend: 'up',
    },
    {
      title: 'Games',
      value: '12',
      icon: <Event sx={{ fontSize: 40, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      change: '+23%',
      trend: 'up',
    },
    {
      title: 'Win Rate',
      value: '78%',
      icon: <TrendingUp sx={{ fontSize: 40, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      change: '+5%',
      trend: 'up',
    },
  ]

  const quickActions = [
    {
      title: 'Create New Team',
      description: 'Set up a new basketball team with advanced analytics',
      action: () => navigate('/teams/new'),
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: <Group />,
    },
    {
      title: 'Add Player',
      description: 'Register a new player with performance tracking',
      action: () => navigate('/players/new'),
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: <SportsBasketball />,
    },
    {
      title: 'Schedule Game',
      description: 'Plan your next game with smart scheduling',
      action: () => navigate('/games/new'),
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: <Event />,
    },
  ]

  const recentActivities = [
    {
      title: 'Team Lakers won against Warriors',
      time: '2 hours ago',
      type: 'victory',
      icon: <EmojiEvents sx={{ color: '#ffd700' }} />,
    },
    {
      title: 'New player John Doe joined team Celtics',
      time: '5 hours ago',
      type: 'player',
      icon: <Group sx={{ color: '#667eea' }} />,
    },
    {
      title: 'Game scheduled for tomorrow at 7 PM',
      time: '1 day ago',
      type: 'schedule',
      icon: <Event sx={{ color: '#f093fb' }} />,
    },
    {
      title: 'Performance analytics updated',
      time: '2 days ago',
      type: 'analytics',
      icon: <Timeline sx={{ color: '#43e97b' }} />,
    },
  ]

  const teamPerformance = [
    { name: 'Lakers', performance: 85, color: '#667eea' },
    { name: 'Warriors', performance: 78, color: '#f093fb' },
    { name: 'Celtics', performance: 92, color: '#43e97b' },
  ]

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth='lg'>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Avatar
                sx={{
                  bgcolor: 'transparent',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  mr: 3,
                  width: 64,
                  height: 64,
                }}
              >
                <DashboardIcon sx={{ fontSize: 32 }} />
              </Avatar>
              <Box>
                <Typography variant='h3' component='h1' gutterBottom sx={{ fontWeight: 700 }}>
                  Welcome back, {user?.username}!
                </Typography>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <Chip
                    label={user?.role}
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  />
                  <Chip
                    icon={<Whatshot />}
                    label='On Fire!'
                    sx={{
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                  <Typography variant='body2' color='text.secondary'>
                    Last login: Today at 9:30 AM
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography variant='h4' gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
              Performance Overview
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '1fr 1fr',
                  lg: '1fr 1fr 1fr 1fr',
                },
                gap: 3,
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      background: stat.gradient,
                      color: 'white',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                      }}
                    />
                    <CardContent sx={{ position: 'relative' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          mb: 2,
                        }}
                      >
                        <Box>
                          <Typography color='inherit' gutterBottom sx={{ opacity: 0.9 }}>
                            {stat.title}
                          </Typography>
                          <Typography variant='h3' component='div' sx={{ fontWeight: 800 }}>
                            {stat.value}
                          </Typography>
                        </Box>
                        <Box>{stat.icon}</Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TrendingUp sx={{ fontSize: 16, mr: 0.5 }} />
                        <Typography variant='body2' sx={{ opacity: 0.9 }}>
                          {stat.change} from last month
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography variant='h4' gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
              Quick Actions
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                gap: 3,
              }}
            >
              {quickActions.map((action, index) => (
                <motion.div key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      height: '100%',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                    onClick={action.action}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            background: action.gradient,
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          {action.icon}
                        </Box>
                        <Typography variant='h6' component='h3' sx={{ fontWeight: 600 }}>
                          {action.title}
                        </Typography>
                      </Box>
                      <Typography variant='body2' color='text.secondary' sx={{ mb: 3, lineHeight: 1.6 }}>
                        {action.description}
                      </Typography>
                      <Button
                        variant='outlined'
                        startIcon={<Add />}
                        sx={{
                          borderColor: 'transparent',
                          background: action.gradient,
                          color: 'white',
                          '&:hover': {
                            borderColor: 'transparent',
                            background: action.gradient,
                            opacity: 0.9,
                          },
                        }}
                      >
                        Create
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Bottom Section with Recent Activity and Team Performance */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
            gap: 4,
          }}
        >
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box>
              <Typography variant='h4' gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Recent Activity
              </Typography>
              <Card>
                <CardContent sx={{ p: 0 }}>
                  {recentActivities.map((activity, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 3,
                        borderBottom: index < recentActivities.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.02)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ mr: 2 }}>{activity.icon}</Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant='body1' sx={{ fontWeight: 500 }}>
                            {activity.title}
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            {activity.time}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </motion.div>

          {/* Team Performance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box>
              <Typography variant='h5' gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Team Performance
              </Typography>
              <Card>
                <CardContent>
                  {teamPerformance.map((team, index) => (
                    <Box key={index} sx={{ mb: index < teamPerformance.length - 1 ? 3 : 0 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography variant='body1' sx={{ fontWeight: 500 }}>
                          {team.name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {team.performance}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant='determinate'
                        value={team.performance}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: team.color,
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}

export default DashboardPage
