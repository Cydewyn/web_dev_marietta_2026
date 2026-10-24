
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

import { validateCourseForm } from "./AddCourseValidation";

function AddCourse() {
  // Dropdown states
  const [semester, setSemester] = React.useState("");
  const [daysOffered, setDaysOffered] = React.useState("");
  const [classTime, setClassTime] = React.useState("");

  // Semester dropdown
  const handleSemesterChange = (event: SelectChangeEvent) => {
    setSemester(event.target.value);
  };

  // Days Offered dropdown
  const handleDaysChange = (event: SelectChangeEvent) => {
    setDaysOffered(event.target.value);
    setClassTime("");
  };

  // Class Time dropdown
  const handleTimeChange = (event: SelectChangeEvent) => {
    setClassTime(event.target.value);
  };

  // Available class times based on days
  const getClassTimes = (): string[] => {
    switch (daysOffered) {
      case "MWF":
        return [
          "8:00 AM - 8:50 AM",
          "9:00 AM - 9:50 AM",
          "10:00 AM - 10:50 AM",
          "11:00 AM - 11:50 AM",
          "12:00 PM - 12:50 PM",
          "1:00 PM - 1:50 PM",
          "2:00 PM - 2:50 PM",
          "3:00 PM - 3:50 PM",
        ];

      case "MW":
        return [
          "9:00 AM - 10:50 AM",
          "1:00 PM - 2:15 PM",
          "1:00 PM - 2:50 PM",
          "2:00 PM - 3:15 PM",
        ];

      case "TR":
        return [
          "8:00 AM - 9:15 AM",
          "9:30 AM - 10:45 AM",
          "11:00 AM - 12:15 PM",
          "1:00 PM - 2:15 PM",
          "2:30 PM - 3:45 PM",
        ];

      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
        return [
          "1:00 PM - 4:00 PM",
          "2:00 PM - 5:00 PM",
          "7:00 PM - 9:30 PM",
        ];

      default:
        return [];
    }
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
            maxWidth: 650,
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
            Add Course
          </Typography>

          {/* Add Course Form */}
          <Box
            component="form"
            onSubmit={validateCourseForm}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Semester */}
            <FormControl fullWidth>
              <InputLabel id="semesterLabel">
                Semester
              </InputLabel>

              <Select
                labelId="semesterLabel"
                id="semester"
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

            {/* Course Name */}
            <TextField
              label="Course Name"
              id="courseName"
              variant="outlined"
              fullWidth
            />

            {/* Room */}
            <TextField
              label="Room (Optional)"
              id="room"
              variant="outlined"
              fullWidth
            />

            {/* Days Offered */}
            <FormControl fullWidth>
              <InputLabel id="daysOfferedLabel">
                Days Offered
              </InputLabel>

              <Select
                labelId="daysOfferedLabel"
                id="daysOffered"
                value={daysOffered}
                label="Days Offered"
                onChange={handleDaysChange}
              >
                <MenuItem value="MWF">
                  Monday / Wednesday / Friday
                </MenuItem>

                <MenuItem value="MW">
                  Monday / Wednesday
                </MenuItem>

                <MenuItem value="TR">
                  Tuesday / Thursday
                </MenuItem>

                <MenuItem value="Monday">
                  Monday
                </MenuItem>

                <MenuItem value="Tuesday">
                  Tuesday
                </MenuItem>

                <MenuItem value="Wednesday">
                  Wednesday
                </MenuItem>

                <MenuItem value="Thursday">
                  Thursday
                </MenuItem>
              </Select>
            </FormControl>

            {/* Class Time */}
            <FormControl fullWidth>
              <InputLabel id="classTimeLabel">
                Class Time
              </InputLabel>

              <Select
                labelId="classTimeLabel"
                id="classTime"
                value={classTime}
                label="Class Time"
                onChange={handleTimeChange}
                disabled={daysOffered === ""}
              >
                {getClassTimes().map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Credit Hours */}
            <TextField
              label="Credit Hours"
              id="creditHours"
              variant="outlined"
              type="text"
              fullWidth
            />

            {/* Instructor First Name */}
            <TextField
              label="Instructor First Name"
              id="instructorFirstName"
              variant="outlined"
              fullWidth
            />

            {/* Instructor Last Name */}
            <TextField
              label="Instructor Last Name"
              id="instructorLastName"
              variant="outlined"
              fullWidth
            />

            {/* Enrollment Cap */}
            <TextField
              label="Enrollment Cap"
              id="enrollmentCap"
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

export default AddCourse;
