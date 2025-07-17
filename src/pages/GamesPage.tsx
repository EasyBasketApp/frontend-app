import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import {
  Event,
  Add,
  LocationOn,
  AccessTime,
  SportsBasketball,
  EmojiEvents,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const GamesPage: React.FC = () => {
  const games = [
    {
      homeTeam: "Lakers",
      awayTeam: "Warriors",
      date: "Today",
      time: "7:00 PM",
      venue: "Staples Center",
      status: "live",
      score: { home: 98, away: 92 },
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      homeTeam: "Celtics",
      awayTeam: "Heat",
      date: "Tomorrow",
      time: "8:30 PM",
      venue: "TD Garden",
      status: "upcoming",
      score: null,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      homeTeam: "Nets",
      awayTeam: "Knicks",
      date: "Jan 15",
      time: "7:30 PM",
      venue: "Barclays Center",
      status: "completed",
      score: { home: 112, away: 108 },
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      homeTeam: "Bulls",
      awayTeam: "Pistons",
      date: "Jan 18",
      time: "6:00 PM",
      venue: "United Center",
      status: "upcoming",
      score: null,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      homeTeam: "Suns",
      awayTeam: "Nuggets",
      date: "Jan 20",
      time: "9:00 PM",
      venue: "Footprint Center",
      status: "scheduled",
      score: null,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      homeTeam: "Bucks",
      awayTeam: "76ers",
      date: "Jan 22",
      time: "8:00 PM",
      venue: "Fiserv Forum",
      status: "scheduled",
      score: null,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "#ff4444";
      case "upcoming":
        return "#4facfe";
      case "completed":
        return "#43e97b";
      case "scheduled":
        return "#667eea";
      default:
        return "#999";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live":
        return "LIVE";
      case "upcoming":
        return "UPCOMING";
      case "completed":
        return "COMPLETED";
      case "scheduled":
        return "SCHEDULED";
      default:
        return status.toUpperCase();
    }
  };

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
                Games Schedule
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
                Schedule Game
              </Button>
            </Box>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
              Manage your game schedule with smart scheduling and real-time
              updates
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
              }}
            >
              {games.map((game, index) => (
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
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: game.gradient,
                      }}
                    />

                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 3,
                        }}
                      >
                        <Chip
                          label={getStatusText(game.status)}
                          sx={{
                            backgroundColor: getStatusColor(game.status),
                            color: "white",
                            fontWeight: 600,
                            animation:
                              game.status === "live"
                                ? "pulse 2s infinite"
                                : "none",
                            "@keyframes pulse": {
                              "0%": { opacity: 1 },
                              "50%": { opacity: 0.7 },
                              "100%": { opacity: 1 },
                            },
                          }}
                        />
                        {game.score && (
                          <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            {game.score.home} - {game.score.away}
                          </Typography>
                        )}
                      </Box>

                      <Box sx={{ textAlign: "center", mb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, mr: 2 }}
                          >
                            {game.homeTeam}
                          </Typography>
                          <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mx: 2 }}
                          >
                            vs
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, ml: 2 }}
                          >
                            {game.awayTeam}
                          </Typography>
                        </Box>
                        <SportsBasketball
                          sx={{ fontSize: 32, color: "text.secondary" }}
                        />
                      </Box>

                      <Stack spacing={2}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Event sx={{ mr: 1, color: "text.secondary" }} />
                          <Typography variant="body1">
                            {game.date} at {game.time}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <LocationOn sx={{ mr: 1, color: "text.secondary" }} />
                          <Typography variant="body1" color="text.secondary">
                            {game.venue}
                          </Typography>
                        </Box>
                      </Stack>

                      {game.status === "completed" && (
                        <Box sx={{ mt: 3, textAlign: "center" }}>
                          <EmojiEvents
                            sx={{ color: "#ffd700", fontSize: 24, mr: 1 }}
                          />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            Winner:{" "}
                            {game.score && game.score.home > game.score.away
                              ? game.homeTeam
                              : game.awayTeam}
                          </Typography>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ textAlign: "center", mt: 8 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Ready to schedule your next game?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Create and manage your game schedule with smart venue booking
                and team notifications.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Event />}
                sx={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  px: 6,
                  py: 2,
                }}
              >
                Schedule New Game
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GamesPage;
