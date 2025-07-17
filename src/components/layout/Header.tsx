import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Chip,
} from "@mui/material";
import {
  SportsBasketball,
  AccountCircle,
  Logout,
  Dashboard,
  Group,
  Person,
  Event,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    handleClose();
  };

  const handleProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const handleDashboard = () => {
    navigate("/dashboard");
    handleClose();
  };

  const navItems = [
    { path: "/teams", label: "Teams", icon: <Group /> },
    { path: "/players", label: "Players", icon: <Person /> },
    { path: "/games", label: "Games", icon: <Event /> },
  ];

  const isActivePath = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              mr: 4,
            }}
            onClick={() => navigate("/")}
          >
            <SportsBasketball
              sx={{
                mr: 1,
                fontSize: 32,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BasketEasy
            </Typography>
          </Box>
        </motion.div>

        {/* Navigation Items */}
        {isAuthenticated && (
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                startIcon={item.icon}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 3,
                  background: isActivePath(item.path)
                    ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    : "transparent",
                  color: isActivePath(item.path) ? "white" : "text.primary",
                  "&:hover": {
                    background: isActivePath(item.path)
                      ? "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)"
                      : "rgba(102, 126, 234, 0.1)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ flexGrow: 1 }} />

        {isAuthenticated ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Chip
              label={`${user?.role}`}
              sx={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                color: "white",
                fontWeight: 600,
                textTransform: "capitalize",
                display: { xs: "none", sm: "flex" },
              }}
            />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    fontWeight: 600,
                  }}
                >
                  {user?.username?.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
            </motion.div>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: 2,
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  mt: 1,
                },
              }}
            >
              <MenuItem
                onClick={handleDashboard}
                sx={{ borderRadius: 1, mx: 1 }}
              >
                <Dashboard sx={{ mr: 2 }} />
                Dashboard
              </MenuItem>
              <MenuItem onClick={handleProfile} sx={{ borderRadius: 1, mx: 1 }}>
                <AccountCircle sx={{ mr: 2 }} />
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{ borderRadius: 1, mx: 1, color: "error.main" }}
              >
                <Logout sx={{ mr: 2 }} />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              onClick={() => navigate("/login")}
              variant="outlined"
              sx={{
                borderColor: "rgba(102, 126, 234, 0.5)",
                color: "#667eea",
                "&:hover": {
                  borderColor: "#667eea",
                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                },
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
