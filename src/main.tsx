import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Paper,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";

// Import Pages
import Home from "./Home";
import Students from "./user_management/Students";
import Instructors from "./user_management/Instructors";
import AddCourse from "./course_management/AddCourse";
import RegisterCourse from "./course_management/RegisterCourse";
import DropCourse from "./course_management/DropCourse";
import Manual from "./manual/Manual";

// Dark Mode Theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ce93d8",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
});

// Navigation Links
const navigationLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Enroll Student",
    path: "/enroll_student",
  },
  {
    label: "Add Instructor",
    path: "/add_instructor",
  },
  {
    label: "Add Course",
    path: "/add_course",
  },
  {
    label: "Register Course",
    path: "/register",
  },
  {
    label: "Drop Course",
    path: "/drop",
  },
];

// Main Application
function App() {
  const [menuAnchor, setMenuAnchor] =
    useState<null | HTMLElement>(null);

  const location = useLocation();

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Header></Header>
      {/* Navigation Bar */}
      <AppBar
        position="static"
        sx={{
          bgcolor: "#1e1e1e",
          color: "#ffffff",
        }}
      >
        <Toolbar>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 0.5,
              alignItems: "center",
              ml: "auto",
                mr: "auto",
            }}
          >
            {navigationLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                color="inherit"
                sx={{
                  fontWeight:
                    location.pathname === link.path
                      ? "bold"
                      : "normal",
                  borderBottom:
                    location.pathname === link.path
                      ? "2px solid #90caf9"
                      : "2px solid transparent",
                  borderRadius: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Navigation */}
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              {navigationLinks.map((link) => (
                <MenuItem
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  selected={
                    location.pathname === link.path
                  }
                  onClick={handleMenuClose}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Page Content */}
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Enroll Student */}
          <Route
            path="/enroll_student"
            element={<Students />}
          />

          {/* Add Instructor */}
          <Route
            path="/add_instructor"
            element={<Instructors />}
          />

          {/* Add Course */}
          <Route
            path="/add_course"
            element={<AddCourse />}
          />

          {/* Register Course */}
          <Route
            path="/register"
            element={<RegisterCourse />}
          />

          {/* Drop Course */}
          <Route
            path="/drop"
            element={<DropCourse />}
          />

          {/* Programmer Manual */}
          <Route
            path="/manual"
            element={<Manual />}
          />

          {/* Page Not Found */}
          <Route
            path="*"
            element={
              <Paper
                sx={{
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                >
                  Page Not Found
                </Typography>

                <Typography sx={{ mb: 2 }}>
                  The requested page could not be found.
                </Typography>

                <Button
                  component={RouterLink}
                  to="/"
                  variant="contained"
                >
                  Return Home
                </Button>
              </Paper>
            }
          />
        </Routes>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#1e1e1e",
          color: "#ffffff",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="body2">
          Course Registration System
        </Typography>

        <Typography variant="caption">
          Collin Gladen | Ian Hufford | Claire Line
        </Typography>
      </Box>

      {/* Help Button */}
      <Button
        component={RouterLink}
        to="/manual"
        variant="contained"
        startIcon={<HelpIcon />}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1200,
          boxShadow: 3,
        }}
      >
        Help
      </Button>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Typography variant="h1" sx={{fontSize: {xs: 24, sm: 36, md: 50}, pb: 1}}>Course and Student Management System</Typography>
    </>
  )
}

// Render Application
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
); }
else {
  throw new Error(
    "Root element not found. Check index.html."
  );
}
