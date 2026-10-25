
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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import type { SelectChangeEvent } from "@mui/material/Select";

import { validateCourseForm } from "./AddCourseValidation";

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AddCourse() {

  const rollingMinDate = dayjs().add(0, 'month');
  const rollingMaxDate = dayjs().add(6, 'year');

  function MakeHelpButton() {
      return(
            <>
                  <IconButton onClick={handleClickOpen} sx={{width:"2.5vw",height:"2.5vw", ml:"1vw",border:"solid 1px",borderColor:"primary.main"}}>
                        <QuestionMarkIcon/>
                  </IconButton>
                  <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  role="alertdialog"
                  >
                  <DialogTitle id="alert-dialog-title" sx={{color:"text.primary"}}>
                  {"Enroll Student Help"}
                  </DialogTitle>
                  <DialogContent >
                  <DialogContentText id="alert-dialog-description" sx={{color:"text.primary"}}>
                        <Typography variant="body2">On this page you can create new courses which students can register for. The following are acceptable values for the form fields</Typography>
                        <List>
                          <ListItem>
                            <ListItemText primary="Semester" secondary="Required. This field indicates what semester the course is offered in, whether it is summer, fall, or spring semester. Winter semester is not an option."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Year" secondary="Required. Select the year in which the course will be offered from the date picker box."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Prefix" secondary="Required. Enter the course's prefix indicating the subject and/or department. It must be 3-4 capital letters, e.g. ART, MATH, or CSCI."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Number" secondary="Required. Enter the course number, which must be a three-digit number between 100 to 400. 100 level courses are the lowest level courses while 400 are the highest level course supported by this registration system (graduate level courses are not currently supported by the system)."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Section" secondary="Required. Enter the course's section. Type 00 if there is only one section. Otherwise, enter two digits ranging from 01 to 99 (typically only 1-3). All course information must be re-entered for each section of a course offered; this system does not currently support an option to choose the number of sections and have section numbers automatically generated."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Name" secondary="Optional. Enter the course's name. For example, 'The History of Science' or 'Programming 1.' Spaces, apostrophes, and hyphens may be included."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Room" secondary="Optional. Enter the room in which the course is offered. This is typically the name of a building followed by the room number. E.g. 'THOM 203' or 'BART 289.'"/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Days Offered" secondary="Required. Select the days during which the class is offered. This will determine the times at which the class may be offered."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Class Time" secondary="Required. Select the time at which the course is offered. It may have only one time slot. Labs are currently not supported."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Credit Hours" secondary="Required. Enter the number of credit hours a course takes. This number must be between 0 and 4 hours."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Instructor First Name" secondary="Required. Enter the instructor's first name in its entirety. For example, 'David' or 'Fatima.' Spaces, hyphens, and apostrophes are permitted."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Instructor Last Name" secondary="Required. Enter the instructor's last name in its entirety. For example, 'Williams,' 'O'Connell', 'al-Sayid,' or 'de las Casas.' Spaces, hyphens, and apostrophes are permitted."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Enrollment Cap" secondary="Required. Enter the course's enrollment cap. This can range from 1 to 99 students."/>
                          </ListItem>
                        </List>
                  </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                  </Dialog>
            </>
            )
      }

      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
      setOpen(true);
      };

      const handleClose = () => {
      setOpen(false);
      };

  // Dropdown states
  const [semester, setSemester] = React.useState("");
  const [daysOffered, setDaysOffered] = React.useState("");
  const [classTime, setClassTime] = React.useState("");
  const [courseYear, setCourseYear] = React.useState<Dayjs | null>(dayjs('2027'));

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
          <Box sx={{display:"inline-flex"}}>
                    <Typography
                      variant="h4"
                      component="h1"
                      gutterBottom
                      sx={{color:"text.primary"}}
                    >
                      Add Course
                    </Typography>
                    <MakeHelpButton/>
                </Box>

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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker
                label="Course Year"
                views = {['year']}
                value={courseYear}
                onChange={(newValue) => setCourseYear(newValue)}
                minDate={rollingMinDate}
                maxDate={rollingMaxDate}
                slotProps={{
                  textField: {
                    helperText: 'Select Course Year',
                  },
                  popper: {
                    sx: {
                      height:"4vh",
                      margin:"1vh",
                    }
                  }
                }}
              />
            </DemoContainer>
          </LocalizationProvider>

            {/* Course Prefix */}
            <TextField
              label="Course Prefix"
              id="coursePrefix"
              variant="outlined"
              fullWidth
              required
            />

            {/* Course Number */}
            <TextField
              label="Course Number"
              id="courseNumber"
              variant="outlined"
              type="text"
              fullWidth
              required
            />

            {/* Course Section */}
            <TextField
              label="Course Section"
              id="courseSection"
              variant="outlined"
              type="text"
              fullWidth
              required
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
              label="Room"
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
              required
            />

            {/* Instructor First Name */}
            <TextField
              label="Instructor First Name"
              id="instructorFirstName"
              variant="outlined"
              fullWidth
              required
            />

            {/* Instructor Last Name */}
            <TextField
              label="Instructor Last Name"
              id="instructorLastName"
              variant="outlined"
              fullWidth
              required
            />

            {/* Enrollment Cap */}
            <TextField
              label="Enrollment Cap"
              id="enrollmentCap"
              variant="outlined"
              type="text"
              fullWidth
              required
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
