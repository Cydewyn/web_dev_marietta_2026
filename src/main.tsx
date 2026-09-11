import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import ButtonGroup from '@mui/material/ButtonGroup';

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
      <AppBar position="static" className="Navbar">
        <Toolbar>
          <ButtonGroup>
            <Button ><Link to="/" under-line="none">Home</Link> </Button>
            <Button ><Link to="/enroll_student">Manage Students</Link> </Button>
            <Button ><Link to="/add_instructor">Manage Instructors</Link> </Button>
            <Button ><Link to="/add_course">Manage Courses</Link> </Button>
            <Button ><Link to="/register">Register for Courses</Link> </Button>
            <Button ><Link to="/drop">Drop Courses</Link> </Button>
          </ButtonGroup>
        </Toolbar>
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
    </BrowserRouter>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
