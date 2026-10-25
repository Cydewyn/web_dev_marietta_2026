
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

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// Import validation function
import { validateDropForm } from "./DropCourseValidation";

function DropCourse() {

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
                        <Typography variant="body2">On this page, you can enroll new students. The following explains what is acceptable inputs for the following fields.</Typography>
                        <List>
                          <ListItem>
                            <ListItemText primary="Student First Name" secondary="Required. Enter the student's first name in its entirety. For example, 'David' or 'Fatima.' Spaces, hyphens, and apostrophes are permitted."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Student Last Name" secondary="Required. Enter the student's last name in its entirety. For example, 'Williams' 'O'Connell', 'al-Sayid' or 'de las Casas.' Spaces, hyphens, and apostrophes are permitted."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Semester" secondary="Required. Select the semester during which the course is offered. This may be Spring, Summer, or Fall. "/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Year" secondary="Required. Select the year during which the course is offered. You may not enroll in a course from a year which has passed."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Prefix" secondary="Required. Enter the course prefix, which must consist of 3-4 letters, e.g. ART or PHYS."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Number" secondary="Required. Enter the course number. This must be a number between 100 and 499. Graduate courses (500+) are not currently permitted in this system."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Course Section" secondary="Required. Enter the course's section number. This is two digits. If there is only one section, enter 00."/>
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

  // Semester dropdown state
  const [semester, setSemester] = React.useState("");
  const [courseYear, setCourseYear] = React.useState<Dayjs | null>(dayjs('2027'));

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
          <Box sx={{display:"inline-flex"}}>
                      <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        sx={{color:"text.primary"}}
                      >
                        Drop Course
                      </Typography>
                      <MakeHelpButton/>
                    </Box>

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
              required
            />

            {/* Student Last Name */}
            <TextField
              label="Student Last Name"
              id="studentLastName"
              variant="outlined"
              fullWidth
              required
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
