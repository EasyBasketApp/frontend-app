import { Add, Height, Person } from "@mui/icons-material";
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
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const PlayersPage: React.FC = () => {
  const players = [
    {
      name: "LeBron James",
      position: "Forward",
      team: "Lakers",
      performance: 95,
      height: "6'9\"",
      experience: "20 years",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stats: { points: 28.5, assists: 8.2, rebounds: 7.9 },
    },
    {
      name: "Stephen Curry",
      position: "Guard",
      team: "Warriors",
      performance: 92,
      height: "6'2\"",
      experience: "14 years",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      stats: { points: 32.1, assists: 6.5, rebounds: 4.8 },
    },
    {
      name: "Jayson Tatum",
      position: "Forward",
      team: "Celtics",
      performance: 88,
      height: "6'8\"",
      experience: "6 years",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      stats: { points: 26.9, assists: 4.1, rebounds: 8.0 },
    },
    {
      name: "Kevin Durant",
      position: "Forward",
      team: "Suns",
      performance: 91,
      height: "6'10\"",
      experience: "16 years",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      stats: { points: 29.7, assists: 5.0, rebounds: 6.7 },
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
                Players Management
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  px: 4,
                  py: 1.5,
                }}
              >
                Add Player
              </Button>
            </Box>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
              Track player performance, statistics, and development with
              advanced analytics
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
              }}
            >
              {players.map((player, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 3 }}
                      >
                        <Avatar
                          sx={{
                            background: player.gradient,
                            width: 64,
                            height: 64,
                            mr: 3,
                            fontSize: "1.5rem",
                            fontWeight: 700,
                          }}
                        >
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {player.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {player.position} • {player.team}
                          </Typography>
                          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                            <Chip
                              size="small"
                              label={player.height}
                              icon={
                                <Height sx={{ fontSize: "16px !important" }} />
                              }
                              variant="outlined"
                            />
                            <Chip
                              size="small"
                              label={player.experience}
                              variant="outlined"
                            />
                          </Stack>
                        </Box>
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            Performance Score
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {player.performance}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={player.performance}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(0,0,0,0.1)",
                            "& .MuiLinearProgress-bar": {
                              background: player.gradient,
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                          gap: 2,
                          p: 2,
                          backgroundColor: "rgba(0,0,0,0.02)",
                          borderRadius: 2,
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {player.stats.points}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            PPG
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {player.stats.assists}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            APG
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {player.stats.rebounds}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            RPG
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ textAlign: "center", mt: 8 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Ready to add your players?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Register new players with comprehensive performance tracking and
                development analytics.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Person />}
                sx={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  px: 6,
                  py: 2,
                }}
              >
                Add New Player
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PlayersPage;
