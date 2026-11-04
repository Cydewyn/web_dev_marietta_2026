import React from "react";
import {Box, Typography, ButtonGroup, Button} from "@mui/material";
import Instructors from "../user_management/Instructors";

export function ManageInstructors() {

      const [view, setView] = React.useState("view");

      return (
            <Box sx={{bgcolor:"background.primary"}}>
                  <Typography variant="h2">Manage Courses</Typography>

                  <ButtonGroup>
                        <Button onClick={() => setView("view")}>View Instructor List</Button>
                        <Button onClick={() => setView("add")}>Add Instructors</Button>
                        <Button onClick={() => setView("remove")}>Remove Instructors</Button>
                  </ButtonGroup>

                  {view == "view" && <ViewInstructors/>}
                  {view == "add" && <Instructors/>}
            </Box>
      )
}

function ViewInstructors() {
      return (
            <Typography variant="h2">View Instructors</Typography>
      )
}