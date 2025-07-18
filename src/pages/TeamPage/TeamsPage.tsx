import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";
import {
  Group,
  Add,
  TrendingUp,
  Star,
  SportsBasketball,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TeamsPage: React.FC = () => {
  const navigate = useNavigate();

  const teams = [
    {
      name: "Lakers",
      players: 15,
      wins: 8,
      losses: 2,
      winRate: 80,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      avatar: "L",
    },
    {
      name: "Warriors",
      players: 14,
      wins: 7,
      losses: 3,
      winRate: 70,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      avatar: "W",
    },
    {
      name: "Celtics",
      players: 16,
      wins: 9,
      losses: 1,
      winRate: 90,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      avatar: "C",
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
                Teams Management
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
                Create Team
              </Button>
            </Box>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
              Manage your basketball teams with advanced analytics and
              performance tracking
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                },
                gap: 4,
              }}
            >
              {teams.map((team, index) => (
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
                            background: team.gradient,
                            width: 56,
                            height: 56,
                            mr: 2,
                            fontSize: "1.5rem",
                            fontWeight: 700,
                          }}
                        >
                          {team.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {team.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {team.players} players
                          </Typography>
                        </Box>
                      </Box>

                      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                        <Chip
                          label={`${team.winRate}% Win Rate`}
                          sx={{
                            background: team.gradient,
                            color: "white",
                            fontWeight: 600,
                          }}
                          icon={
                            <TrendingUp sx={{ color: "white !important" }} />
                          }
                        />
                        <Chip
                          label={`${team.wins}W - ${team.losses}L`}
                          variant="outlined"
                        />
                      </Stack>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          Performance:{" "}
                          {team.winRate > 80
                            ? "Excellent"
                            : team.winRate > 70
                            ? "Good"
                            : "Average"}
                        </Typography>
                        <Star
                          sx={{ color: team.winRate > 80 ? "#ffd700" : "#ccc" }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ textAlign: "center", mt: 8 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Ready to create your first team?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Set up a new basketball team with advanced roster management and
                performance analytics.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Group />}
                sx={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  px: 6,
                  py: 2,
                }}
              >
                Create Your Team
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TeamsPage;
