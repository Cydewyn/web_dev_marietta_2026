import React from "react";
import {Box, Typography, ButtonGroup, Button} from "@mui/material";
import EnrollStudent from "../user_management/Students";
import RegisterCourse from "../course_management/RegisterCourse";
import DropCourse from "../course_management/DropCourse";

export function ManageStudents() {

      const [view, setView] = React.useState("view");

      return (
            <Box sx={{bgcolor:"background.primary"}}>
                  <Typography variant="h2">Manage Courses</Typography>

                  <ButtonGroup>
                        <Button onClick={() => setView("view")}>View Students</Button>
                        <Button onClick={() => setView("add")}>Add Student</Button>
                        <Button onClick={() => setView("courses")}>Enroll or Drop Courses</Button>
                  </ButtonGroup>

                  {view == "view" && <ViewStudents/>}
                  {view == "add" && <EnrollStudent/>}
                  {view == "courses" && <ManageEnrollments/>}
            </Box>
      )
}

function ManageEnrollments() {

      const [view, setView] = React.useState("view");

      return(
            <Box sx={{bgcolor:"background.primary"}}>
                  <Typography variant="h3">Manage Student Enrollments</Typography>

                  <ButtonGroup>
                        <Button onClick={() => setView("view")}>View Enrollments</Button>
                        <Button onClick={() => setView("register")}>Register for Course</Button>
                        <Button onClick={() => setView("drop")}>Drop Courses</Button>
                  </ButtonGroup>

                  {view == "view" && <ViewCourses/>}
                  {view == "register" && <RegisterCourse/>}
                  {view == "drop" && <DropCourse/>}
            </Box>
      )
}

function ViewCourses() {
      return (
            <Typography variant="h2">View Courses</Typography>
      )
}

function ViewStudents() {
      return (
            <Typography variant="h2">View Students</Typography>
      )
}