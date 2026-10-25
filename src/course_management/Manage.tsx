import '../index.css';
import * as React from 'react';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import NumberField from '../mui_material_components/NumberField';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { Typography, Paper } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemText} from "@mui/material";
  
import dayjs, { Dayjs } from 'dayjs';
import Alert from '@mui/material/Alert';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

// Material Imports
//import Stack from '@mui/material/Stack';



export default function Course_Management() {
      return (
    
            <>

            <Add_Course/>

            </>
      )
}

function Add_Course() {

  function MakeHelpButton() {
      return(
            <>
                  <IconButton onClick={handleClickOpen} sx={{width:"2.5vw",height:"2.5vw", ml:"1vw"}}>
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
                            <ListItemText primary="Student First Name" secondary="Enter the student's first name in its entirety. For example, 'David' or 'Fatima.' Spaces, hyphens, and apostrophes are permitted."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Student Last Name" secondary="Enter the student's last name in its entirety. For example, 'Williams' 'O'Connell', 'al-Sayid' or 'de las Casas.' Spaces, hyphens, and apostrophes are permitted."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Student Class Year" secondary="Select the student's current class year. Selection should be by credit hours. This uses the American system. 'Freshman' is a first-year student (< 30 credit hours), 'Sophmore' is a second-year student (30-59 credit hours), 'Junior' is a third-year student (60-89 credit hours), and 'Senior' is a student in their final year of school (90+ credit hours). If the student has been at the college for four or more years, select 'Senior.'"/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Student Major" secondary="Enter the student's major. Write 'Undeclared' if the student is undeclared. Spaces, apostrophes, and hyphens are allowed."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Student Email" secondary="Enter the student's email. Only @marietta.edu emails are permitted (in the formats ab123@marietta.edu or abc123@marietta.edu)."/>
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

  // Define check booleans
  var [coursePrefixIsValid, setCoursePrefixIsValid] = React.useState(true);
  var [courseSectionIsValid, setCourseSectionIsValid] = React.useState(true);
  var [instructorFirstNameIsValid, setInstructorFirstNameIsValid] = React.useState(true);
  var [instructorLastNameIsValid, setInstructorLastNameIsValid] = React.useState(true);

  // Form input pull

  function gatherFormInput() {

    var submitted_semester = semester;
    var submitted_courseYear = courseYear;
    var submitted_coursePrefix = coursePrefix;
    var submitted_courseNumber = courseNumber;
    var submitted_courseSection = courseSection;
    var submitted_courseName = courseName;
    var submitted_room = room;
    var submitted_daytime = daytime;
    if (submitted_daytime == "MWF") {
      var submitted_courseTime = mwfTime;
    } else if (submitted_daytime == "MW") {
      var submitted_courseTime = mwTime;
    } else if (submitted_daytime == "TR") {
      var submitted_courseTime = tthTime;
    } else {
      var submitted_courseTime = singleDayTime;
    }
    var submitted_creditHours = creditHours;
    var submtted_enrollmentCap = enrollmentCap;
    var submitted_instructorFirstName = instuctorFirstName;
    var submitted_instructorLastName = instructorLastName;
  }

  // React Use States
  const [semester, setSemester] = React.useState('');
  const [courseYear, setCourseYear] = React.useState<Dayjs | null>(dayjs('2026'));
  const [coursePrefix, setCoursePrefix] = React.useState('');
  const [courseNumber, setCourseNumber] = React.useState(100);
  const [courseSection, setCourseSection] = React.useState('');
  const [courseName, setCourseName] = React.useState('');
  const [room, setRoom] = React.useState('');
  const [creditHours, setCreditHours] = React.useState(1);
  const [daytime, setDayTime] = React.useState('');
  const [mwfTime, setMWFTime] = React.useState('');
  const [mwTime, setMWTime] = React.useState('');
  const [tthTime, setTTHTime] = React.useState('');
  const [singleDayTime, setSingleDayTime] = React.useState('');
  const [enrollmentCap,setEnrollmentCap] = React.useState(30);
  const [instuctorFirstName, setInstructorFirstName] = React.useState('');
  const [instructorLastName, setInstructorLastName] = React.useState('');

  // Event Changes
  const handleInstructorFirstNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {

    const regex = new RegExp("^[A-Z,a-z,-,']+$");

      if (regex.test(event.target.value)) {
        setInstructorFirstNameIsValid(false);
      } else if (event.target.value == null) {
        setInstructorFirstNameIsValid(true);
      }else {
        setInstructorFirstNameIsValid(true);
        setInstructorFirstName(event.target.value);
      }
    }

    const handleInstructorLastNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {

      const regex = new RegExp("^[A-Z,a-z,-,']+$");

      if (regex.test(event.target.value)) {
          setInstructorLastNameIsValid(false)
      } else if (event.target.value == null) {
        setInstructorLastNameIsValid(true)
      }else {
        setInstructorLastNameIsValid(true)
        setInstructorLastName(event.target.value);
      }
      }

      const handleCoursePrefixChange = (event : React.ChangeEvent<HTMLInputElement>) => {

        const regex = new RegExp('^[A-Z]{3,4}$');

        if (regex.test(event.target.value)) {
          setCoursePrefixIsValid(false);
        } else if (event.target.value == null) {
        setCoursePrefixIsValid(true);
      }else {
          setCoursePrefixIsValid(true);
          setCoursePrefix(event.target.value);
        }
      }

      const handleCourseSectionChange = (event : React.ChangeEvent<HTMLInputElement>) => {

        const regex = new RegExp("^\d{2}$");

        if (regex.test(event.target.value)) {
          setCourseSectionIsValid(true);
          setCourseSection(event.target.value);
        } else if (event.target.value == null) {
          setCourseSectionIsValid(false);
         } else {
          setCourseSectionIsValid(false);
        }
      }

      const handleCourseNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setCourseName(event.target.value);
      }

      const handleRoomChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setRoom(event.target.value);
      }

      const handleSemesterChange = (event: SelectChangeEvent) => {
            setSemester(event.target.value);
      }

      const handleDayTimeChange = (event: SelectChangeEvent) => {
            setDayTime(event.target.value);
      }

      const handleMWFTimeChange = (event: SelectChangeEvent) => {
            setMWFTime(event.target.value);
      }

      const handleMWTimeChange = (event: SelectChangeEvent) => {
            setMWTime(event.target.value);
      }

      const handleTTHTimeChange = (event: SelectChangeEvent) => {
            setTTHTime(event.target.value);
      }

      const handleSingleDayTimeChange = (event: SelectChangeEvent) => {
            setSingleDayTime(event.target.value);
      }

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
        {/* Add Course */}
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
              gap: 2,
            }}
          >

            <Typography
              variant="h4"
              color="textPrimary"
              component="h1"
              gutterBottom
            >
              Add Course
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
                  
                  <InputLabel id="semester" sx={{textAlign:"left"}}>Semester</InputLabel>
                  <Select
                        labelId="semester"
                        id="semester_select"
                        value={semester}
                        label="Semester"
                        required
                        onChange={handleSemesterChange}
                  >
                        <MenuItem value="Spring">Spring</MenuItem>
                        <MenuItem value="Summer">Summer</MenuItem>
                        <MenuItem value="Fall">Fall</MenuItem>
                  </Select>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Course Year" 
                    value={courseYear}
                    views={['year']}
                    format="YYYY"
                    minDate={dayjs("2026")}
                    maxDate={dayjs("2032")}
                    onChange={(newValue) => setCourseYear(newValue)}
                    slotProps={{desktopPaper:{sx:{maxHeight:"100px"}}}}/>
                </LocalizationProvider>
            
                <TextField id="coursePrefix" label="Course Prefix" variant="outlined"
                fullWidth
                onChange={handleCoursePrefixChange}
                required
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }} 
                />

                {coursePrefixIsValid && (<Alert severity="error">Your entered course prefix is invalid; please enter a sequence of 3-4 capital letters</Alert>)}

                <NumberField label="Course Number" required id="courseNumber" min={1} max={3} value={courseNumber} onValueChange={(value) => {setCourseNumber(value??100)}}/>

                {/* <TextField id="courseNumber" label="Course Number" variant="outlined"
                fullWidth
                onChange={handleCourseNumberChange}
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }} /> */}

                <TextField id="courseSection" label="Course Section" variant="outlined"
                fullWidth
                onChange={handleCourseSectionChange}
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }} />

                {courseSectionIsValid && (<Alert severity="error">Your entered course section is invalid; please enter exactly 2 digits</Alert>)}

                <TextField id="courseName" label="Course Name" variant="outlined"
                fullWidth
                onChange={handleCourseNameChange}
                required
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }} />

                <TextField id="room" label="Room" variant="outlined"
                fullWidth
                onChange={handleRoomChange}
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }} />


                <InputLabel id="daysOffered">Days Offered</InputLabel>
                  <Select
                        labelId="daysOffered"
                        id="daysOfferedSelect"
                        value={daytime}
                        label="daysOffered"
                        required
                        onChange={handleDayTimeChange}
                  >
                        <MenuItem value="MWF">Monday, Wednesday, Friday</MenuItem>
                        <MenuItem value="MW">Monday, Wednesday</MenuItem>
                        <MenuItem value="TR">Tuesday, Thursday</MenuItem>
                        <MenuItem value="Monday">Monday</MenuItem>
                        <MenuItem value="Tuesday">Tuesday</MenuItem>
                        <MenuItem value="Wednesday">Wednesday</MenuItem>
                        <MenuItem value="Thursday">Thursday</MenuItem>
                  </Select>

                  {(daytime == "MWF") &&
                  <>
                    <InputLabel id="timeMWF">Monday, Wednesday, Friday</InputLabel>
                    <Select
                          labelId="timeMWF"
                          id="timeMWFSelect"
                          value={mwfTime}
                          label="Monday, Wednesday, Friday"
                          onChange={handleMWFTimeChange}
                    >
                          <MenuItem value="8:00-8:50">8:00 AM to 8:50 AM</MenuItem>
                          <MenuItem value="9:00-9:50">9:00 AM to 9:50 AM</MenuItem>
                          <MenuItem value="10:00-10:50">10:00 AM to 10:50 AM</MenuItem>
                          <MenuItem value="11:00-11:50">11:00 AM to 11:50 AM</MenuItem>
                          <MenuItem value="12:00-12:50">12:00 PM to 12:50 PM</MenuItem>
                          <MenuItem value="1:00-1:50">1:00 PM to 1:50 PM</MenuItem>
                          <MenuItem value="2:00-2:50">2:00 PM to 2:50 PM</MenuItem>
                          <MenuItem value="3:00-3:50">3:00 PM to 3:50 PM</MenuItem>
                    </Select>
                  </>
                  } 
                {(daytime == "MW") &&
                  <>
                    <InputLabel id="timeMW">Monday, Wednesday</InputLabel>
                      <Select
                            labelId="timeMW"
                            id="timeMWSelect"
                            value={mwTime}
                            label="Monday, Wednesday, Friday"
                            onChange={handleMWTimeChange}
                      >
                            <MenuItem value="9:00-10:50">9:00 AM to 10:50 AM</MenuItem>
                            <MenuItem value="1:00-2:15">1:00 PM to 2:15 PM</MenuItem>
                            <MenuItem value="1:00-2:50">1:00 PM to 2:50 PM</MenuItem>
                            <MenuItem value="2:00-3:15">2:00 PM to 3:15 PM</MenuItem>
                      </Select>
                    </> 
                    }

                    {(daytime == "TR") && <>
                      <InputLabel id="timeTTH">Tuesday, Thursday</InputLabel>
                        <Select
                              labelId="timeTTH"
                              id="timeTTHSelect"
                              value={tthTime}
                              label="Tuesday, Thursday"
                              onChange={handleTTHTimeChange}
                        >
                              <MenuItem value="8:00-9:15">8:00 AM to 9:15 AM</MenuItem>
                              <MenuItem value="9:30-10:45">9:30 AM to 10:45 AM</MenuItem>
                              <MenuItem value="11:00-12:15">11:00 AM to 12:15 PM</MenuItem>
                              <MenuItem value="1:00-2:15">1:00 PM to 2:15 PM</MenuItem>
                              <MenuItem value="2:30-3:45">2:30 PM to 3:45 PM</MenuItem>
                        </Select>
                    </>}

                    {(daytime == "Monday" || daytime == "Tuesday" || daytime == "Wednesday" || daytime == "Thursday") && <>
                    
                      <InputLabel id="timeSingleDay">Single Day</InputLabel>
                        <Select
                              labelId="timeSingleDay"
                              id="timeSingleDaySelect"
                              value={singleDayTime}
                              label="Tuesday, Thursday"
                              onChange={handleSingleDayTimeChange}
                        >
                              <MenuItem value="1:00-4:00">1:00 PM to 4:00 PM</MenuItem>
                              <MenuItem value="2:00-5:00">2:00 PM to 5:00 PM</MenuItem>
                              <MenuItem value="7:00-9:30">7:00 PM to 9:30 PM</MenuItem>
                        </Select>

                    </>}

                <NumberField label="Credit Hours" id="creditHours" min={1} max={4} value={creditHours} onValueChange={(value) => {setCreditHours(value??1)}}/>

                <TextField id="instuctorFirstName" label="Instructor First Name" variant="outlined"
                fullWidth
                onChange={handleInstructorFirstNameChange}
                required
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }} />

                {instructorFirstNameIsValid && (<Alert severity="error">Your entered value for instructor first name is invalid</Alert>)}

                <TextField id="instructorLastName" label="Instructor Last Name" variant="outlined"
                fullWidth
                onChange={handleInstructorLastNameChange}
                required
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }} />

                {instructorLastNameIsValid && (<Alert severity="error">Your entered value for instructor last name is invalid</Alert>)}

                
                <NumberField label="Enrollment Cap" id="enrollmentCap" min={1} max={99} value={enrollmentCap} onValueChange={(value) => {setEnrollmentCap(value??30)}}/>

                

                <Button 
                  type="submit"
                  variant="contained"
                  size="large"
                  onSubmit={gatherFormInput}
                  sx={{
                    backgroundColor: "primary",
                    color: "secondary",
                    fontWeight: "bold",

                    "&:hover": {
                      backgroundColor: "info",
                    },
                }}>Submit</Button>

                </Box>
                </Paper>
                </Box>
                </Box>
            
      )
}


