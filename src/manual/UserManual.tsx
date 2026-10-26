import '../index.css';
import React from 'react';
import {Box, Typography, CardContent, Button, ButtonGroup, Accordion, Divider, AccordionSummary,AccordionDetails, Card, List, ListItem, ListItemText} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function UserManual() {
      return (
            <>
                  <Card>
                        <CardContent>
                              <Typography variant="h6">Need help on another page?</Typography>
                              <Divider></Divider>
                              <List>
                                    <ListItem><ListItemText primary="Press the 'Help' Button in the lower right hand corner" secondary="This will return you to this page so you can view the full manual. By default, it will be set to the User Manual."/></ListItem>
                                    <ListItem><ListItemText primary="Filling out a form? You can always press the '?' button beside the form title." secondary="This will bring up a list of all form inputs, including valid inputs and tips for filling out the form."/></ListItem>
                              </List>
                        </CardContent>
                  </Card>
                  <StudentFAQ/>
                  <AdministratorFAQ/>
                  <DetailedHowTo/>
                  <PageSummary/>
            </>
      )
}

function StudentFAQ() {
      return (
            <>
                  <Typography variant="h3" sx={{textAlign:"left", mt: "2vh", mb:"3vh"}}>Student FAQ</Typography>
                  <Divider></Divider>

                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How do I register for courses?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    To register for courses, go to the "Register Course" page. 
                                    Once on the page, you can fill out the form with your information and the course information. 
                                    For more information, see "How to Register for a Course" in the how-to guides below. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How do I drop a course?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    To drop courses, go to the "Drop Course" page. 
                                    Once on the page, you can fill out the form with your information and the course information. 
                                    For more information, see "How to Drop a Course" in the how-to guides below. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
            </>
      )
}

function AdministratorFAQ() {
      return (
            <>
                  <Typography variant="h3" sx={{textAlign:"left", mt: "2vh", mb:"3vh"}}>Administrator FAQ</Typography>
                  <Divider></Divider>

                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How do I register a student?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    To enroll a student, go to the "Enroll Student" page. 
                                    Once there, fill out the form with the student's information. 
                                    For more information, see "How to Enroll a Student" in the how-to guides below. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How do I add an instructor?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    To register an instructor, go to the "Add Instructor" page. 
                                    Once there, fill out the instructor's details and submit them. 
                                    For more information, see "How to Add an Instructor" in the how-to guides below. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How do I add a course?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    To create a course, go to the "Add Course" page. 
                                    Once there, you will fill out the form with the class details. 
                                    For more information, see "How to Add a Course" in the how-to guides below. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
            </>
      )
}

function DetailedHowTo() {
      return (
            <>
                  <Typography variant="h3" sx={{textAlign:"left", mt: "2vh", mb:"3vh"}}>How To Guides</Typography>
                  <Divider></Divider>

                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How to Enroll a Student</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1" sx={{textAlign:"left", textEmphasis:"bold"}}>Form Input</Typography>
                              <Divider></Divider>
                              <Typography variant="body2" sx={{textAlign:"left",color:"text.secondary"}}>
                                    After going to the "Enroll Student" page, you will need to enter the following information:
                              </Typography>
                              <List>
                              <ListItem>
                              <ListItemText primary="Student First Name" secondary="Required. Enter the student's first name in its entirety. For example, 'David' or 'Fatima.' Spaces, hyphens, and apostrophes are permitted."/>
                              </ListItem>
                              <ListItem>
                              <ListItemText primary="Student Last Name" secondary="Required. Enter the student's last name in its entirety. For example, 'Williams,' 'O'Connell', 'al-Sayid,' or 'de las Casas.' Spaces, hyphens, and apostrophes are permitted."/>
                              </ListItem>
                              <ListItem>
                              <ListItemText primary="Student Class Year" secondary="Required. Select the student's current class year. Selection should be by credit hours. This uses the American system. 'Freshman' is a first-year student (< 30 credit hours), 'Sophomore' is a second-year student (30-59 credit hours), 'Junior' is a third-year student (60-89 credit hours), and 'Senior' is a student in their final year of school (90+ credit hours). If the student has been at the college for four or more years, select 'Senior.'"/>
                              </ListItem>
                              <ListItem>
                              <ListItemText primary="Student Major" secondary="Optional. Enter the student's major. Write 'Undeclared' if the student is undeclared. Spaces, apostrophes, and hyphens are allowed."/>
                              </ListItem>
                              <ListItem>
                              <ListItemText primary="Student Email" secondary="Required. Enter the student's email. Only @marietta.edu emails are permitted (in the formats ab123@marietta.edu or abc123@marietta.edu)."/>
                              </ListItem>
                        </List>
                        <Typography variant="body1" sx={{textAlign:"left"}}>Submission</Typography>
                        <Divider></Divider>
                        <Typography variant="body2" sx={{textAlign:"left", color:"text.secondary"}}>
                              Once you submit the information, the form will check that all inputs are valid. 
                              If the information entered in any field is invalid, a popup will appear on the center of the screen informing you of which fields were invalid. 
                              If the form clears with no popup, your information was successfully validated. 
                        </Typography>
                        <Typography variant="body2" sx={{textAlign:"center",mt:"2vh"}}>
                              If at any point during the process you need to refer to this information, click the '?' button by the form title.  
                        </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How to Add an Instructor</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1" sx={{textAlign:"left", textEmphasis:"bold"}}>Form Input</Typography>
                              <Divider></Divider>
                              <Typography variant="body2" sx={{textAlign:"left",color:"text.secondary"}}>
                                    After going to the "Add Instructor" page, you will need to enter the following information:
                              </Typography>
                              <List>
                                    <ListItem>
                                    <ListItemText primary="Instructor First Name" secondary="Required. Enter the instructor's first name in its entirety. For example, 'David' or 'Fatima.' Spaces, hyphens, and apostrophes are permitted."/>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemText primary="Instructor Last Name" secondary="Required. Enter the instructor's last name in its entirety. For example, 'Williams,' 'O'Connell', 'al-Sayid,' or 'de las Casas.' Spaces, hyphens, and apostrophes are permitted."/>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemText primary="Instructor Department" secondary="Optional. Enter the instructor's department. For example, 'English' or 'Mathematics and Computer Science.' Please spell out department names in their entirety with no abbreviations."/>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemText primary="Instructor Rank" secondary="Required. Select the instructor's rank from the dropdown."/>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemText primary="Instructor Email" secondary="Required. Enter the instructor's email. Only @marietta.edu emails are permitted (in the formats ab123@marietta.edu or abc123@marietta.edu)."/>
                                    </ListItem>
                              </List>
                        <Typography variant="body1" sx={{textAlign:"left"}}>Submission</Typography>
                        <Divider></Divider>
                        <Typography variant="body2" sx={{textAlign:"left", color:"text.secondary"}}>
                              Once you submit the information, the form will check that all inputs are valid. 
                              If the information entered in any field is invalid, a popup will appear on the center of the screen informing you of which fields were invalid. 
                              If the form clears with no popup, your information was successfully validated. 
                        </Typography>
                        <Typography variant="body2" sx={{textAlign:"center",mt:"2vh"}}>
                              If at any point during the process you need to refer to this information, click the '?' button by the form title.  
                        </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How to Add a Course</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2">
                                    Note: This page is for adding courses to the registration system, not for enrolling students into existing courses.
                                    If you are instead looking to enroll a student into a course, go to the "Register Course" page.
                              </Typography>
                              <Typography variant="body1" sx={{textAlign:"left", textEmphasis:"bold"}}>Form Input</Typography>
                              <Divider></Divider>
                              <Typography variant="body2" sx={{textAlign:"left",color:"text.secondary"}}>
                                    After going to the "Add Course" page, you will fill out the following fields:
                              </Typography>
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
                        <Typography variant="body1" sx={{textAlign:"left"}}>Submission</Typography>
                        <Divider></Divider>
                        <Typography variant="body2" sx={{textAlign:"left", color:"text.secondary"}}>
                              Once you submit the information, the form will check that all inputs are valid. 
                              If the information entered in any field is invalid, a popup will appear on the center of the screen informing you of which fields were invalid. 
                              If the form clears with no popup, your information was successfully validated. 
                        </Typography>
                        <Typography variant="body2" sx={{textAlign:"center",mt:"2vh"}}>
                              If at any point during the process you need to refer to this information, click the '?' button by the form title.  
                        </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How to Register for a Course</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2">
                                    Note: This page is for enrolling students into existing courses. 
                                    If you intend to register a course into the system, please go to the "Add Course" page.
                              </Typography>
                              <Typography variant="body1" sx={{textAlign:"left", textEmphasis:"bold"}}>Form Input</Typography>
                              <Divider></Divider>
                              <Typography variant="body2" sx={{textAlign:"left",color:"text.secondary"}}>
                                    After going to the "Register Course" page, you will enter the following information about the student who is enrolling in the course: 
                              </Typography>
                              <List>
                                    <ListItem>
                                    <ListItemText primary="Student First Name" secondary="Required. Enter the student's first name in its entirety. For example, 'David' or 'Fatima.' Spaces, hyphens, and apostrophes are permitted."/>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemText primary="Student Last Name" secondary="Required. Enter the student's last name in its entirety. For example, 'Williams,' 'O'Connell', 'al-Sayid,' or 'de las Casas.' Spaces, hyphens, and apostrophes are permitted."/>
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
                        <Typography variant="body1" sx={{textAlign:"left"}}>Submission</Typography>
                        <Divider></Divider>
                        <Typography variant="body2" sx={{textAlign:"left", color:"text.secondary"}}>
                              Once you submit the information, the form will check that all inputs are valid. 
                              If the information entered in any field is invalid, a popup will appear on the center of the screen informing you of which fields were invalid. 
                              If the form clears with no popup, your information was successfully validated. 
                        </Typography>
                        <Typography variant="body2" sx={{textAlign:"center",mt:"2vh"}}>
                              If at any point during the process you need to refer to this information, click the '?' button by the form title.  
                        </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">How to Drop a Course</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1" sx={{textAlign:"left", textEmphasis:"bold"}}>Form Input</Typography>
                              <Divider></Divider>
                              <Typography variant="body2" sx={{textAlign:"left",color:"text.secondary"}}>
                                    After going to the "Register Course" page, you will enter the following information about the student who is dropping in the course:
                              </Typography>
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
                        <Typography variant="body1" sx={{textAlign:"left"}}>Submission</Typography>
                        <Divider></Divider>
                        <Typography variant="body2" sx={{textAlign:"left", color:"text.secondary"}}>
                              Once you submit the information, the form will check that all inputs are valid. 
                              If the information entered in any field is invalid, a popup will appear on the center of the screen informing you of which fields were invalid. 
                              If the form clears with no popup, your information was successfully validated. 
                        </Typography>
                        <Typography variant="body2" sx={{textAlign:"center",mt:"2vh"}}>
                              If at any point during the process you need to refer to this information, click the '?' button by the form title.  
                        </Typography>
                        </AccordionDetails>
                  </Accordion>
            </>
      )
}

function PageSummary() {
      return (
            <>
                  <Typography variant="h3" sx={{textAlign:"left", mt: "2vh", mb:"3vh"}}>Page Summaries</Typography>
                  <Divider></Divider>

                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Manual</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1">You are here</Typography>
                              <Typography variant="body2" sx={{mt:"2vh",mb:"2vh",textAlign:"left"}}>
                                    On this page you can access information about the website and how it functions. 
                                    Additionally, programmers working on the website can access the programmer manual using the button at the top of the page. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Home Page</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    This page introduces the website with a summary of features available for users of the website. 
                                    Using the top menu, you can click from page to page on the website.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Register Student</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    On this page, you can register students into the Course Management System. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Add Instructor</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    On this page you can register instructors into the system. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Add Course</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    This page allows you to add courses into the system so that students can register for them. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Register Course</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    This page allows students to register for courses. 
                                    Alternatively, administrators and advisors can register students using their information on this page.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Drop Course</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    This page allows students to drop courses. 
                                    Alternatively, administrators and advisors can remove students from classes by using their information on this page.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
            </>
      )
}
