import '../index.css';
import {Box, Typography} from "@mui/material";

// Material Imports
//import Stack from '@mui/material/Stack';

export default function Manual() {
      return ( <>
                  <h1>Documentation</h1>
                  <UserManual/>
                  <ProgrammerManual/>
            </>
      )
}

function UserManual() {
      return (
            <Box>
                  <Typography variant="h2">User Manual</Typography>
                  <Typography variant="body2">To navigate throughout this website use the bar at the top!</Typography>
                  <Typography variant="body2">Need help? Then click on the "help" button in the bottom right corner of the page!</Typography>
                  <br></br>
                  <Typography variant="h2">Managing Students</Typography>
                  <Typography variant="body2">To manage students, click on the "Students" button in the top navigation bar.</Typography>
                  <Typography variant="body2">To add a student, fill out the form and click submit at the bottom of the form.</Typography>
                  <Typography variant="body2">You will need to provide the student's first and last name along with their current year (freshman, sophomore, junior, senior). Then you will need to provide their email and major!</Typography>
                  <Typography variant="body2">Please be sure to fill out all fields correctly and completely.</Typography>
                  <br></br>
                  <Typography variant="h2">Managing Instructors</Typography>
                  <Typography variant="body2">Adding instructors is the same process as adding a student and is also found in the nav bar at the top!</Typography>
                  <br></br>
                  <Typography variant="h2">Managing Courses</Typography>
                  <Typography variant="body2">To manage courses, click on the "Manage courses" button in the top navigation bar.</Typography>
                  <Typography variant="body2">To add a course, fill out the form and click submit at the bottom of the form.</Typography>
                  <Typography variant="body2">You will need to provide the course name, course number, the instructor's name, course prefix, Course year, and the room number</Typography>
                  <Typography variant="body2">You will also need to provide the year the course is offered as well as the enrollment cap. The cap will be between 10 and 40/</Typography>
                  <Typography variant="body2">Please be sure to be specific with the date abd time of when the course is offered. It will be on a MWF or TTH format and you will also need to provide the amount of credits each course is worth</Typography>
                  <br></br>
                  <Typography variant="h2">Register Courses</Typography>
                  <Typography variant="body2">To register for courses, click on the "Register Courses" button in the top navigation bar.</Typography>
                  <Typography variant="body2">To register for a course you will need to provide the course prefix, number, your first and last name, and the year you are (freshman, sophomore, junior, senior).</Typography>
                  <br></br>
                  <Typography variant="h2">Dropping a course</Typography>
                  <Typography variant="body2">To drop a course, click on the "Drop Courses" button in the top navigation bar</Typography>
                  <Typography variant="body2">The process of dropping a course is the same as registering for a course</Typography>
                  <br></br>
            </Box>
      )
}

function ProgrammerManual() {
      return (
      
            <Box>
                  <Typography variant="h2">Programmer Manual</Typography>
                  <Typography variant="body2">This course registration system is designed to assist students and instructors in enrolling professors and students, adding or dropping classes, as well as managing course information. And you will use the navigation menu on the top of the screen to move between pages. 
</Typography>
<br></br>
<Typography variant="h2">Overview </Typography>
                  <Typography variant="body2">This system is built using MUI, HTML, and React, and it functions in modern browsers along with mobile. This site includes pages for enrolling students and instructors, registering and managing courses, and more. Each page contains forms with clearly labeled input elements. The React is stored internally and is kept simple to ensure user friendliness. Programmers are encouraged to keep things simple when making updates or changes to the system. 
</Typography>
<br></br>
<Typography variant="h2">Home Page</Typography>
                  <Typography variant="body2">The home page serves as a welcome screen. It features navigation buttons on the top of the screen and there are no form elements</Typography>
                  <br></br>
                  <Typography variant="h2">Drop Course Page</Typography>
                  <Typography variant="body2">The DropCourse page allows students to enter information to drop a course. It contains the standard header, navigation menu, form, and footer.
Form Elements:
studentFirstName – Student first name
studentLastName – Student last name
semesterYear – Semester and year
coursePrefix – Course prefix
courseNumber – Course number
courseSection – Course section
Submit – Submits the form
Functions:
DropCourse() – Displays the Drop Course page.
onSubmit – Prevents the default form submission.
</Typography>
<br></br>
<Typography variant="h2">Course Management Page</Typography>
                  <Typography variant="body2">The Course_Management page allows users to enter information needed to create and manage a course. It contains the standard header, navigation menu, form, and footer.
Form Elements:
semester_select – Semester
courseYear – Course year
coursePrefix – Course prefix
courseNumber – Course number
courseSection – Course section
courseName – Course name
room – Classroom
daysOfferedSelect – Days the course meets
timeMWFSelect – MWF class time
timeMWSelect – MW class time
timeTTHSelect – T/Th class time
timeSingleDaySelect – Single-day class time
creditHours – Credit hours
InstructorFirstName – Instructor first name
instructorLastName – Instructor last name
enrollmentCap – Maximum enrollment
Submit – Submits the form
Functions:
Course_Management() – Displays the Course Management page.
No additional form-processing functions are currently implemented.
</Typography>
<br></br>
<Typography variant="h2">Register Course Page</Typography>
<Typography variant="body2">The RegisterCourse page allows students to enter information needed to register for a course. It contains the standard header, navigation menu, form, and footer.
Form Elements:
studentFirstName – Student first name
studentLastName – Student last name
semesterYear – Semester and year
coursePrefix – Course prefix
courseNumber – Course number
courseSection – Course section
Submit – Submits the form
Functions:
RegisterCourse() – Displays the Register Course page.
No additional form-processing functions are currently implemented.
</Typography>
<br></br>
<Typography variant="h2">Add Instructor Page</Typography>
<Typography variant="body2">The AddInstructor page allows users to enter information for a new instructor. It contains the standard header, navigation menu, form, and footer.
Form Elements:
instructorFirstName – Instructor first name
instructorLastName – Instructor last name
instructorDepartment – Instructor department
instructorRank – Instructor rank
instructorEmail – Instructor email address
Submit – Submits the form
Functions:
AddInstructor() – Displays the Add Instructor page.
No additional form-processing functions are currently implemented.
</Typography>
<br></br>
<Typography variant="h2">Enroll Student Page
</Typography>
<Typography variant="body2">The EnrollStudent page allows users to enter information for a new student. It contains the standard header, navigation menu, form, and footer.
Form Elements:
studentFirstName – Student first name
studentLastName – Student last name
studentYear – Student year
studentMajor – Student major
studentEmail – Student email address
Submit – Submits the form
Functions:
EnrollStudent() – Displays the Enroll Student page.
No additional form-processing functions are currently implemented.
</Typography>
<br></br>
            </Box>
      )
}