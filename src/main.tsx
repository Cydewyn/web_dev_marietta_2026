import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// Page imports
import Home from "./Home.tsx";
import Course_Management from "./course_management/Manage.tsx";
import Course_Registration from "./course_management/Register.tsx";
import Drop_Course from "./course_management/Drop.tsx";
import Student_Management from "./user_management/Students.tsx";
import Instructor_Management from "./user_management/Instructors.tsx";
import Manual from "./manual/Manual.tsx";

function App() {
  return (
    <BrowserRouter>
      <Stack direction="row">
        <Box><Link to="/">Home</Link> </Box>
        <Box><Link to="/enroll_student">Manage Students</Link> </Box>
        <Box><Link to="/add_instructor">Manage Instructors</Link> </Box>
        <Box><Link to="/add_course">Manage Courses</Link> </Box>
        <Box><Link to="/register">Register for Courses</Link> </Box>
        <Box><Link to="/drop">Drop Courses</Link> </Box>
      </Stack>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll_student" element={<Student_Management />} />
        <Route path="/add_instructor" element={<Instructor_Management />} />
        <Route path="/add_course" element={<Course_Management />}/>
        <Route path="/register" element={<Course_Registration />} />
        <Route path='/drop' element={<Drop_Course />} />
        <Route path="/manual" element={<Manual />}/>
      </Routes>
    </BrowserRouter>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
