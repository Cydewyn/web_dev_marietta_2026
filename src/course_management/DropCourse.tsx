
import * as React from "react";

import {
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import type { SelectChangeEvent } from "@mui/material/Select";

// Import validation function
import { validateDropForm } from "./DropCourseValidation";

function DropCourse() {
  // Semester dropdown state
  const [semester, setSemester] = React.useState("");

  // Handle semester selection
  const handleSemesterChange = (event: SelectChangeEvent) => {
    setSemester(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            maxWidth: 600,
            margin: "0 auto",
            bgcolor: "background.paper",
            color: "text.primary",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
          >
            Drop Course
          </Typography>

          {/* Drop Course Form */}
          <Box
            component="form"
            onSubmit={validateDropForm}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Student First Name */}
            <TextField
              label="Student First Name"
              id="studentFirstName"
              variant="outlined"
              fullWidth
            />

            {/* Student Last Name */}
            <TextField
              label="Student Last Name"
              id="studentLastName"
              variant="outlined"
              fullWidth
            />

            {/* Semester */}
            <FormControl fullWidth>
              <InputLabel id="dropSemesterLabel">
                Semester
              </InputLabel>

              <Select
                labelId="dropSemesterLabel"
                id="dropSemester"
                value={semester}
                label="Semester"
                onChange={handleSemesterChange}
              >
                <MenuItem value="Spring">
                  Spring
                </MenuItem>

                <MenuItem value="Summer">
                  Summer
                </MenuItem>

                <MenuItem value="Fall">
                  Fall
                </MenuItem>
              </Select>
            </FormControl>

            {/* Course Year */}
            <TextField
              label="Course Year"
              id="courseYear"
              variant="outlined"
              type="text"
              fullWidth
            />

            {/* Course Prefix */}
            <TextField
              label="Course Prefix"
              id="coursePrefix"
              variant="outlined"
              fullWidth
            />

            {/* Course Number */}
            <TextField
              label="Course Number"
              id="courseNumber"
              variant="outlined"
              type="text"
              fullWidth
            />

            {/* Course Section */}
            <TextField
              label="Course Section"
              id="courseSection"
              variant="outlined"
              type="text"
              fullWidth
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                fontWeight: "bold",
                marginTop: 2,
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default DropCourse;
