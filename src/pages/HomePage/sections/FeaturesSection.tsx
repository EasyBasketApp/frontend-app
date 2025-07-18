import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as data from "../data";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LockIcon from "@mui/icons-material/Lock";

const iconMap: Record<string, React.ReactNode> = {
  SportsBasketball: <SportsBasketballIcon fontSize="large" color="primary" />,
  Group: <GroupIcon fontSize="large" color="primary" />,
  Event: <EventIcon fontSize="large" color="primary" />,
  Person: <PersonIcon fontSize="large" color="primary" />,
  Dashboard: <DashboardIcon fontSize="large" color="primary" />,
  Lock: <LockIcon fontSize="large" color="primary" />,
};

const FeaturesSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Features
        </Typography>
        <Grid
          container
          spacing={6}
          sx={{ mt: 4 }}
          display="flex"
          justifyContent="center"
        >
          {data.features.map((feature) => (
            <Grid
              key={feature.title}
              size={{ xs: 12, sm: 6, md: 4 }}
              display="flex"
              justifyContent="center"
            >
              <Card
                elevation={8}
                tabIndex={0}
                sx={{
                  borderRadius: 2,
                  minHeight: 260,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  transition:
                    "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  boxShadow: 6,
                  outline: "none",
                  background: "#fff",
                  border: `1.5px solid ${theme.palette.primary.light}`,
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.contrastText,
                      color: "#fff",
                      mb: 3,
                      width: 72,
                      height: 72,
                      boxShadow: 4,
                      mx: "auto",
                      fontSize: 40,
                    }}
                  >
                    {iconMap[feature.icon]}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, mb: 2, letterSpacing: 0.5 }}
                    gutterBottom
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: "1.1rem" }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
