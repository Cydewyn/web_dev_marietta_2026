import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from '@mui/material';
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { ThemeProvider} from '@mui/material/styles';

// Page imports
import Home from "./Home.tsx";
import Course_Management from "./course_management/Manage.tsx";
import Course_Registration from "./course_management/Register.tsx";
import Drop_Course from "./course_management/Drop.tsx";
import Student_Management from "./user_management/Students.tsx";
import Instructor_Management from "./user_management/Instructors.tsx";
import Manual from "./manual/Manual.tsx";
import {lightMode, darkMode} from "./ColorThemes";

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

function App() {

  const menuID = "menu_button";
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={isDarkMode?darkMode:lightMode}>
    <BrowserRouter>

      <Header/>
      
      <AppBar position="static" className="Navbar" sx={{width:1}}>
        
        <Desktop_App_Bar/>

        <IconButton id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
        sx={{display: {xs: "inline-block", sm: "None"}, width: 1}}>
          <MenuIcon/>
        </IconButton>
        <Menu
          id={menuID}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}>

            <MenuItem onClick={handleClose} component={Link} href="/">Home</MenuItem>

            <MenuItem onClick={handleClose} component={Link} href="/enroll_student">Manage Students</MenuItem>

            <MenuItem onClick={handleClose} component={Link} href="/add_instructor">Manage Instructors</MenuItem>

            <MenuItem onClick={handleClose} component={Link} href="/add_course">Manage Courses</MenuItem>

            <MenuItem onClick={handleClose} component={Link} href="/register">Register Courses</MenuItem>

            <MenuItem onClick={handleClose} component={Link} href="/drop">Drop Courses</MenuItem>

          </Menu>

      </AppBar>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll_student" element={<Student_Management />} />
        <Route path="/add_instructor" element={<Instructor_Management />} />
        <Route path="/add_course" element={<Course_Management />}/>
        <Route path="/register" element={<Course_Registration />} />
        <Route path='/drop' element={<Drop_Course />} />
        <Route path="/manual" element={<Manual />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
}

function Desktop_App_Bar() {
  return (
    <Toolbar sx={{ alignContent:'center', ml: 0.2, display: {sm: "flex", xs: 'none'}}}>
      <Button href="/" variant="text" sx={{width: {sm: 1/10, md: 1/6}, p: {md: "None",sm:1}}}><Typography sx={{color:'white',textDecoration: 'none'}}>Home</Typography></Button>
      <Button href="/enroll_student" variant="text" sx={{width:{sm: 1/4, md: 1/6}, p: {md: "None",sm:1}}}><Typography sx={{color:'white',textDecoration: 'none'}}>Manage Students</Typography></Button>
      <Button href="/add_instructor" variant="text" sx={{width:{sm: 1/4, md: 1/6}, p: {md: "None",sm:1}}}><Typography sx={{color:'white',textDecoration: 'none'}}>Manage Instructors</Typography></Button>
      <Button href="/add_course" variant="text" sx={{width:{sm: 1/5, md: 1/6}, p: {md: "None",sm:1}}}><Typography sx={{color:'white',textDecoration: 'none'}}>Manage Courses</Typography></Button>
      <Button href="/register" variant="text" sx={{width:{sm: 1/5, md: 1/6}, p: {md: "None",sm:1}}}><Typography sx={{color:'white',textDecoration: 'none'}}>Register Courses</Typography></Button>
      <Button href="/drop" variant="text" sx={{width:1/6, p: {md: "None",sm:1}}}><Typography sx={{color:'white',textDecoration: 'none'}}>Drop Courses</Typography></Button>
    </Toolbar>
  )
}

function Footer() {
  return(
      <Box
        component="footer"
        sx={{
          padding: 2,
          textAlign: "center",
          backgroundColor: "#1e1e1e",
          color: "white",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "white" }}
        >
          Group Members: Collin Gladen, Ian Hufford, Claire Line
        </Typography>
      </Box>
  )
}

function Header() {
  return (
    <>
      <h1>Course and Student Management System</h1>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <Button variant="contained" color="primary" href="/manual" endIcon={<HelpIcon />} sx={{width:{xs: 1/4,sm:1/6}, height: {xs: 1/10, sm: 1/15}, position:"fixed",zIndex:"tooltip", right: 5, bottom: 5}}>Help</Button>
  </StrictMode>,
)
