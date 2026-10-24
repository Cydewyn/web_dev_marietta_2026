
import {
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  MenuItem,
} from "@mui/material";
import { validateRegisterCourseForm } from "./RegisterCourseValidation";

function RegisterCourse() {
  const fieldStyle = {
    backgroundColor: "background.paper",
    borderRadius: 1,
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "secondary",
        color: "primary",
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 4,
          backgroundColor: "secondary",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: "secondary",
            color: "primary",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            color="textPrimary"
          >
            Register Course
          </Typography>

          <Box
            component="form"
            onSubmit={validateRegisterCourseForm}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Semester"
              id="semester"
              select
              defaultValue=""
              fullWidth
              sx={fieldStyle}
            >
              <MenuItem value="Spring">Spring</MenuItem>
              <MenuItem value="Summer">Summer</MenuItem>
              <MenuItem value="Fall">Fall</MenuItem>
              <MenuItem value="Winter">Winter</MenuItem>
            </TextField>

            <TextField
              label="Year"
              id="semesterYear"
              variant="outlined"
              fullWidth
              required
              sx={fieldStyle}
            />

            <TextField
              label="Course Prefix"
              id="coursePrefix"
              variant="outlined"
              fullWidth
              required
              sx={fieldStyle}
            />

            <TextField
              label="Course Number"
              id="courseNumber"
              variant="outlined"
              fullWidth
              required
              sx={fieldStyle}
            />

            <TextField
              label="Course Section"
              id="courseSection"
              variant="outlined"
              fullWidth
              required
              sx={fieldStyle}
            />

            <TextField
              label="Course Name"
              id="courseName"
              variant="outlined"
              fullWidth
              sx={fieldStyle}
            />

            <TextField
              label="Room (Building and Room Number)"
              id="courseRoom"
              variant="outlined"
              fullWidth
              placeholder="e.g., Andrews Hall 101A"
              sx={fieldStyle}
            />

            <TextField
              label="Days Offered"
              id="daysOffered"
              select
              defaultValue=""
              fullWidth
              sx={fieldStyle}
            >
              <MenuItem value="MWF">MWF</MenuItem>
              <MenuItem value="MW">MW</MenuItem>
              <MenuItem value="TTH">TTH</MenuItem>
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
            </TextField>

            <TextField
              label="Time"
              id="courseTime"
              select
              defaultValue=""
              fullWidth
              sx={fieldStyle}
            >
              <MenuItem value="8:00 AM">8:00 AM</MenuItem>
              <MenuItem value="9:00 AM">9:00 AM</MenuItem>
              <MenuItem value="10:00 AM">10:00 AM</MenuItem>
              <MenuItem value="11:00 AM">11:00 AM</MenuItem>
              <MenuItem value="12:00 PM">12:00 PM</MenuItem>
              <MenuItem value="1:00 PM">1:00 PM</MenuItem>
              <MenuItem value="2:00 PM">2:00 PM</MenuItem>
              <MenuItem value="3:00 PM">3:00 PM</MenuItem>
              <MenuItem value="4:00 PM">4:00 PM</MenuItem>
            </TextField>

            <TextField
              label="Credit Hours"
              id="creditHours"
              variant="outlined"
              fullWidth
              sx={fieldStyle}
            />

            <TextField
              label="Instructor First Name"
              id="instructorFirstName"
              variant="outlined"
              fullWidth
              sx={fieldStyle}
            />

            <TextField
              label="Instructor Last Name"
              id="instructorLastName"
              variant="outlined"
              fullWidth
              sx={fieldStyle}
            />

            <TextField
              label="Enrollment Cap"
              id="enrollmentCap"
              variant="outlined"
              fullWidth
              sx={fieldStyle}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "primary",
                color: "secondary",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "info",
                },
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

export default RegisterCourse;
