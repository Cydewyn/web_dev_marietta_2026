import AddCourse from "../course_management/AddCourse";
import React from "react";
import {Box, Typography, ButtonGroup, Button} from "@mui/material";

export function ManageCourses() {

      const [view, setView] = React.useState("view");

      return (
            <Box sx={{bgcolor:"background.primary"}}>
                  <Typography variant="h2">Manage Courses</Typography>

                  <ButtonGroup>
                        <Button onClick={() => setView("view")}>View Course List</Button>
                        <Button onClick={() => setView("add")}>Add Courses</Button>
                        <Button onClick={() => setView("remove")}>Remove Courses</Button>
                  </ButtonGroup>

                  {view == "view" && <ViewCourses/>}
                  {view == "add" && <AddCourse/>}
            </Box>
      )
}

function ViewCourses() {
      return (
            <Typography variant="h2">View Courses</Typography>
      )
}