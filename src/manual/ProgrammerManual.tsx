import '../index.css';
import React from 'react';
import {Link, IconButton, List, ListItem, ListItemText, ListItemIcon, Box, Typography, Button, ButtonGroup, Accordion, Divider, AccordionSummary,AccordionDetails, Card, Tooltip} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from '@mui/icons-material/Link';

export default function ProgrammerManual() {
      return (
            <>
                  <Dependencies/>
                  <Architecture/>
                  <Forms/>
                  <OtherFunctions/>
            </>
      )
}

function DocumentationButton(documentation_link : string, tooltip: string) {
      return(
            <Tooltip title={tooltip}>
                  <IconButton edge="end" aria-label={documentation_link} href={documentation_link}>
                        <LinkIcon />
                  </IconButton>
            </Tooltip>
      )
}

function Dependencies() {
      return (
            <>
            <Typography variant="h3" sx={{textAlign:"left", mt: "2vh", mb:"3vh"}}>Major Dependencies</Typography>
                  <List>
                        
                        <ListItem
                              secondaryAction={DocumentationButton("https://react.dev/","View React Documentation")}
                        >
                              <ListItemText sx={{textAlign:"left"}} primary="React" secondary="React is a major web framework which lets you build user interfaces out of individual pieces called components. "/>
                        </ListItem>
                        
                        <ListItem
                              secondaryAction={DocumentationButton("https://vite.dev/","View Vite Documentation")}
                        >
                              <ListItemText sx={{textAlign:"left"}} primary="Vite" secondary="Vite is a library for testing in the browser with an on demand source file serving over native ESM and pre-bundling. MIT License."/>
                        </ListItem>

                        <ListItem
                              secondaryAction={DocumentationButton("https://reactrouter.com/","View React Router Documentation")}
                        >
                              <ListItemText sx={{textAlign:"left"}} primary="React Router" secondary="React Router is one of the most popular routing solutions for the React framework."/>
                        </ListItem>

                        <ListItem
                              secondaryAction={DocumentationButton("https://mui.com/","View MUI Material Documentation")}
                        >
                              <ListItemText sx={{textAlign:"left"}} primary="MUI Material" secondary="Material is a library for React giving a basis for reactive UI. It is used by several major companies, including Amazon and Netflix."/>
                        </ListItem>

                        <ListItem
                              secondaryAction={DocumentationButton("https://base-ui.com/","View Base UI Documentation")}
                        >
                              <ListItemText sx={{textAlign:"left"}} primary="Base UI" secondary="Base UI is a comprehensive UI component library for building accessible user interfaces with React."/>
                        </ListItem>

                        <ListItem
                              secondaryAction={DocumentationButton("https://www.dayjs.io/","View DayJS Documentation")}
                        >
                              <ListItemText sx={{textAlign:"left"}} primary="DayJS" secondary="DayJS is a lightweight framework for formatting dates. It is a dependency for Material UI's DatePicker component."/>
                        </ListItem>

                  </List>
            </>
      )
}

function Architecture() {
      return (
            <>
                  <Typography variant="h3" sx={{textAlign:"left", mt: "2vh", mb:"3vh"}}>File System Structure</Typography>
                  <Divider></Divider>

                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                              <Typography variant="body1">dist</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    This folder is eventually used by vite to create a production build. 
                                    It is not typically used in development, although methods exist for testing it. 
                                    Our group has only used "npm run dev" in testing as we have not deployed a production build. 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">node_modules</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    This folder contains all installed modules for the system. 
                                    Some are installed as dependencies for the core libraries.  
                                    The given npm i commands in the README will allow you to install all dependencies. 
                                    Typically, you should not modify this folder.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">public</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    This folder contains the assets displayed to the browser for use in the browser icon. 
                                    It is not sigificantly used in the project and no code is contained. 
                                    Replacing the icon can be done by replacing the existing file with another by the same name (or finding all references in the system and changing them). 
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">src</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left", mt:"1vh",mb:"1vh"}}>
                                    This folder contains all code used to control the build of the website and has several subdirectories. 
                                    The "App.tsx" file is the default root of the Vite React configuration. 
                                    This root has been changed to "main.tsx" so that the "App.tsx" file is preserved for those reviewing the system. 
                                    The default "App.tsx" contains useful information about the Vite config. 
                              </Typography>
                              <Typography variant="body2" sx={{textAlign:"left", mt:"1vh",mb:"1vh"}}>
                                    All pages are rendered as React Components, made accessible by using the React Router. 
                                    This allows for a one-page website. 
                                    All routes are defined in "main.tsx."
                              </Typography>
                              <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                          <Typography variant="body1">Routes</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography variant="body2" sx={{textAlign:"left", mb:"2vh"}}>
                                                All routes are created in the "Routes" component found in "main.tsx" under the "App" function. 
                                                They are then taken by the "Toolbar" component to be mapped accross the toolbar. 
                                                Only the "Help" route (leading to the manual on this page) is not included in this set of routes. 
                                                Instead, the route to the manuals can be accessed using the button in the lower left, which is an independent component in the "App" function. 
                                                The manual's route is "/manual."
                                          </Typography>
                                          <Divider></Divider>
                                          <List>
                                                <ListItem><ListItemText primary="Home" secondary="The root page which initially loads with the site. Accessed via the empty route."/></ListItem>
                                                <ListItem><ListItemText primary="Students" secondary="The 'Register Student' page with the route /enroll_student."/></ListItem>
                                                <ListItem><ListItemText primary="Instructors" secondary="The 'Add Instructor' page with the route /add_instructor."/></ListItem>
                                                <ListItem><ListItemText primary="AddCourse" secondary="The 'Add Course' page with the route /add_course."/></ListItem>
                                                <ListItem><ListItemText primary="RegisterCourse" secondary="The 'Register Course' with the route /register."/></ListItem>
                                                <ListItem><ListItemText primary="DropCourse" secondary="The 'Drop Course' with route /drop."/></ListItem>
                                          </List>
                                    </AccordionDetails>
                              </Accordion>
                              <Typography variant="body2" sx={{textAlign:"left",mt:"2vh",mb:"2vh"}}>
                                    Summaries of page functionalities can be found in the user manual, with further instructions on implementation in the "Forms & Related Functions" section of this manual.
                              </Typography>
                              <Typography variant="body1" sx={{mt:"3vh",textAlign:"left", mb:"1vh"}}>Files in Main Directory</Typography>
                              <Divider></Divider>
                              <List>
                                    <ListItem><ListItemText primary="App.css" secondary="Default styling for MUI Material on the Vite default build."/></ListItem>
                                    <ListItem><ListItemText primary="App.tsx" secondary="Default example app for Vite build. "/></ListItem>
                                    <ListItem><ListItemText primary="ColorThemes.tsx" secondary="Establishes two color themes for light and dark mode. Not currently enabled on 'main.tsx' and alternative system currently in place. Light mode is currently not fully supported."/></ListItem>
                                    <ListItem><ListItemText primary="Home.tsx" secondary="This page contains the main homepage displayed to the user upon first accessing the website. It has a short summary of features available on each page. The summaries are under Accordions, which expand when the user clicks on them."/></ListItem>
                                    <ListItem><ListItemText primary="index.css" secondary="The backup css file implemented before any theme implementation was begun."/></ListItem>
                                    <ListItem><ListItemText primary="main.tsx" secondary="Contains the site root, the router, and page objects that appear on every page. The router displays the page layout using React Router's 'route' method. The menubar is sticky and will scroll with the user. The footer and header (site name) are also contained within this file. The menu is a Toolbar component nested within an Appbar with dynamically created buttons for routing (see 'navigationlinks.map()' on line 161). When the screen size becomes small enough, the menubar becomes a hamburger which can be expanded."/></ListItem>
                              </List>

                              <Typography variant="body1" sx={{mt:"3vh",textAlign:"left", mb:"1vh"}}>Sub-Directories</Typography>
                              <Divider sx={{mb:"1vh"}}></Divider>
                              <Typography variant="body2" sx={{textAlign:"left", mb:"2vh", mt:"1vh"}}>
                                    Additional pages can be found in the following directories. 
                                    For all forms, further information on method syntax can be found in the <strong>Forms & Related Functions</strong> section.
                              </Typography>
                              <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                          <Typography variant="body1">course_management</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <List>
                                                <ListItem><ListItemText primary="AddCourse.tsx" secondary="Allows the user to create courses for the system. For Course Year, a DatePicker MUI Component is used. Contains React.useState() variables for dropdowns. Dynamically displays available class times based on what days the class is offered using a switch statement within the getClassTimes() function."/></ListItem>
                                                <ListItem><ListItemText primary="AddCourseValidation.ts" secondary="Contains validation rules and implementation for 'AddCourse.tsx.' Validations are checked using Regular Expressions for Typescript. As Typescript automatically validates variable type, these functions do not check for type. The output is then sent to the 'AddCourse.tsx' page with the result (success or failure) displayed to the user."/></ListItem>
                                                <ListItem><ListItemText primary="DropCourse.tsx" secondary="Allows the user to drop courses from a student's schedule by entering their information and the course information. For Course Year, a DatePicker MUI Component is used. See the file 'DropCourseValidation.ts' to see the full validation implementation."/></ListItem>
                                                <ListItem><ListItemText primary="DropCourseValidation.ts" secondary="Contains validation rules and implementation for 'Drop Course.' For Course Year, a DatePicker MUI Component is used. Validations are performed using Regular Expressions. Result of validation is displayed to the user with an alert."/></ListItem>
                                                <ListItem><ListItemText primary="Manage.tsx" secondary="Depreciated version of 'RegisterCourse.tsx' with full in-file validation implemented. It was the form used during the first stage of the project."/></ListItem>
                                                <ListItem><ListItemText primary="RegisterCourse.tsx" secondary="Allows the user to register a student for courses. For Course Year, a DatePicker MUI Component is used. Contains React.useState() variables for dropdowns. Validation rules imported from 'RegisterCourseValidation.ts.'"/></ListItem>
                                                <ListItem><ListItemText primary="RegisterCourseValidation.ts" secondary="Contains validation function for 'RegisterCourse.tsx.' Uses Typescript Regular Expressions for validation rules. Result is displayed to the user with an alert."/></ListItem>
                                          </List>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                          <Typography variant="body1">manual</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <List>
                                                <ListItem><ListItemText primary="Manual.tsx" secondary="Contains the main Manual component and the switch statement for the User and Programmer Manuals."/></ListItem>
                                                <ListItem><ListItemText primary="ProgrammerManual.tsx" secondary="Contains the Programmer Manual with sections frequently using Accordions (expandable boxes) to condense information. Broken into the sections 'Major Dependencies,' containing a list of library dependencies; 'File System Structure,' explaining the contents of each file on the website; 'Forms & Related Functions,' explaining the structure of each form on the website including validation rules; and 'Other Functionalities,' covering everything which does not fit into the other categories."/></ListItem>
                                                <ListItem><ListItemText primary="" secondary="Contains the User Manual with sections frequently using Accordions (expandable boxes) to condense information. Broken down into the sections 'Student FAQ;' 'Administrator FAQ;' 'How To Guides,' which explain how to execute certain functions (much of this information can also be found in information popups on each page); and 'Page Summaries,' containing a short summary of the purpose of each page."/></ListItem>
                                          </List>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                          <Typography variant="body1">mui_material_components</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <List>
                                                <ListItem>
                                                      <ListItemText primary="NumberField.tsx" secondary="Contains the MUI material NumberField component. The library requires you to include this code within any codebase using the function as it is primarily pulled from the Base UI Library."/>
                                                </ListItem>
                                          </List>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                          <Typography variant="body1">user_management</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <List>
                                                <ListItem>
                                                      <ListItemText primary="Instructors.tsx" secondary="Allows users to add new instructors to the system. Implemented using a form with React.useState() variables to store dropdown values. Other validation rules are handled using a function imported from 'InstructorsValidation.ts.'"/>
                                                </ListItem>
                                                <ListItem>
                                                      <ListItemText primary="InstructorsValidation.ts" secondary="Contains the validation rules and their implementation for the Instructors form. Uses Regular Expressions to check adherence to rules set."/>
                                                </ListItem>
                                                <ListItem>
                                                      <ListItemText primary="Students.tsx" secondary="Allows users to add new students to the system. Implemented using React.useState() variables for dropdown values. Validation rules are found in 'StudentsValidation.ts.'"/>
                                                </ListItem>
                                                <ListItem>
                                                      <ListItemText primary="StudentsValidation.tsx" secondary="Contains validation rules and implementation for 'Students.tsx.' Uses Regular Expressions to check values."/>
                                                </ListItem>
                                          </List>
                                    </AccordionDetails>
                              </Accordion>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Other</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2" sx={{textAlign:"left"}}>
                                    Most website content modified from the base vite config (<Link href="https://vite.dev/guide/">see documentation</Link>) is found inside the src directory. 
                                    The index.html file, which serves the React root, has been left unmodified. 
                                    README.md includes the initial vite documentation with a full list of dependencies (from npm ls). 
                                    All other files in this section are config files. 
                                    eslint.config.js sets up the linter we have used for development. 
                                    vite.config.ts sets up the vite compiler. 
                              </Typography>
                              <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                          <Typography variant="body1">JSON files</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <List>
                                                <ListItem>
                                                      <ListItemText primary="package-lock.json" secondary="Establishes dependencies including specific versions for modules. If you encounter errors when attempting to modify the website from non-existent modules, check that your version aligns with the versions used in development."/>
                                                </ListItem>
                                                <ListItem>
                                                      <ListItemText primary="package.json" secondary="Lists all modules used and their versions. Simplified compared to package-lock.json."/>
                                                </ListItem>
                                                <ListItem>
                                                      <ListItemText primary="tsconfig.app.json" secondary="Configures Typescript instance, including linting settings. Note that 'No Unused Locals' is false, allowing for functions and variables to be declared without checking if they have been used. All parameters, however, must be used due to the setting under 'No Unused Parameters.'"/>
                                                </ListItem>
                                                <ListItem>
                                                      <ListItemText primary="tsconfig.json" secondary="Serves as a reference to tsconfig.app.json and the associated tsconfig.node.json."/>
                                                </ListItem>
                                                <ListItem>
                                                      <ListItemText primary="tsconfig.node.json" secondary="Establishes node compiler for the website."/>
                                                </ListItem>
                                                <ListItem>
                                                      <ListItemText primary="vite.config.ts" secondary="Configures the vite instance."/>
                                                </ListItem>
                                          </List>
                                    </AccordionDetails>
                              </Accordion>
                        </AccordionDetails>
                  </Accordion>
            </>
      )
}

function Forms() {
      return (
            <>
                  <Typography variant="h3" sx={{textAlign:"left", mt: "2vh", mb:"3vh"}}>Forms & Related Functions</Typography>
                  <Divider></Divider>

                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Register Student Form</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1" sx={{textAlign:"left"}}>This form can be found on the Register Student page and contains the fields below. Validation rules in the form of Regular Expressions (RegEx) are shown below the field name.</Typography>
                              <List>
                                    <ListItem><ListItemText primary="Student First Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Student Last Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Class Year" secondary="Has default. No RegEx, uses select list to prevent unwanted values"/></ListItem>
                                    <ListItem><ListItemText primary="Student Major" secondary="No RegEx. No validation rules currently implemented."/></ListItem>
                                    <ListItem><ListItemText primary="Student Email Address" secondary="Required. String, limited characters & format. RegEx: /^[A-Za-z]{2,3}[0-9]{3}@marietta\.edu$/"/></ListItem>
                              </List>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Add Instructor Form</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1" sx={{textAlign:"left"}}>This form can be found on the Add Instructor page and contains the fields below. Validation rules in the form of Regular Expressions (RegEx) are shown below the field name.</Typography>
                              <List>
                                    <ListItem><ListItemText primary="Instructor First Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Instructor Last Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Instructor Department" secondary="No RegEx. No validation rules currently implemented."/></ListItem>
                                    <ListItem><ListItemText primary="Instructor Rank" secondary="Has default. No RegEx, uses select list to prevent unwanted values."/></ListItem>
                                    <ListItem><ListItemText primary="Instructor Email" secondary="Required. String, limited characters & format. RegEx: /^[A-Za-z]{2,3}[0-9]{3}@marietta\.edu$/"/></ListItem>
                              </List>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Add Course Form</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1" sx={{textAlign:"left"}}>This form can be found on the Add Course page and contains the fields below. Validation rules in the form of Regular Expressions (RegEx) are shown below the field name.</Typography>
                              <List>
                                    <ListItem><ListItemText primary="Semester" secondary="Has default. No RegEx, uses select list to prevent unwanted values."/></ListItem>
                                    <ListItem><ListItemText primary="Course Year" secondary="Has default. No RegEx, uses datepicker (MUI) to prevent unwanted values."/></ListItem>
                                    <ListItem><ListItemText primary="Course Prefix" secondary="Required. String, limited characters & format. RegEx: /^[A-Z]{3,4}$/"/></ListItem>
                                    <ListItem><ListItemText primary="Course Number" secondary="Required. Number, limited range. RegEx: /^\d{3}$/"/></ListItem>
                                    <ListItem><ListItemText primary="Course Section" secondary="Required. String (numeric), limited range. RegEx: /^\d{2}$/"/></ListItem>
                                    <ListItem><ListItemText primary="Course Name" secondary="No RegEx. No validation rules currently implemented."/></ListItem>
                                    <ListItem><ListItemText primary="Room" secondary="String, limited characters. RegEx: /^[A-Za-z' ]+\s+\d{2,3}[A-Za-z]?$/"/></ListItem>
                                    <ListItem><ListItemText primary="Days Offered" secondary="Has default. No RegEx, uses select list to prevent unwanted values"/></ListItem>
                                    <ListItem><ListItemText primary="Class Time" secondary="Shows default after 'Days Offered' has value selected. No RegEx, uses select list to prevent unwanted values. Conditional display of values based on current value of 'Days Offered.'"/></ListItem>
                                    <ListItem><ListItemText primary="Credit Hours" secondary="Required. Number, limited range. RegEx: /^\d+(\.\d+)?$/"/></ListItem>
                                    <ListItem><ListItemText primary="Instructor First Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Instructor Last Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Enrollment Cap" secondary="Required. Number, limited range. RegEx: /^\d{2}$/"/></ListItem>
                              </List>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Register Course Form</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1" sx={{textAlign:"left"}}>This form can be found on the Register Course page and contains the fields below. Validation rules in the form of Regular Expressions (RegEx) are shown below the field name.</Typography>
                              <List>
                                    <ListItem><ListItemText primary="Instructor First Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Instructor Last Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Semester" secondary="Has default. No RegEx, uses select list to prevent unwanted input."/></ListItem>
                                    <ListItem><ListItemText primary="Course Year" secondary="Has default. No RegEx, uses datepicker (MUI) to prevent unwanted values."/></ListItem>
                                    <ListItem><ListItemText primary="Course Prefix" secondary="Required. String, limited characters & format. RegEx: /^[A-Z]{3,4}$/"/></ListItem>
                                    <ListItem><ListItemText primary="Course Number" secondary="Required. Number, limited range. RegEx: /^\d{3}$/"/></ListItem>
                                    <ListItem><ListItemText primary="Course Section" secondary="Required. Number, limited range. RegEx: /^\d{2}$/"/></ListItem>
                              </List>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1">Drop Course Form</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body1" sx={{textAlign:"left"}}>This form can be found on the Drop Course page and contains the fields below. Validation rules in the form of Regular Expressions (RegEx) are shown below the field name.</Typography>
                              <List>
                                    <ListItem><ListItemText primary="Student First Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Student Last Name" secondary="Required. String, limited characters. RegEx: /^[A-Za-z '-]+$/"/></ListItem>
                                    <ListItem><ListItemText primary="Semester" secondary="Has default. No RegEx, uses select list to prevent unwanted input."/></ListItem>
                                    <ListItem><ListItemText primary="Course Year" secondary="Has default. No RegEx, uses datepicker (MUI) to prevent unwanted values."/></ListItem>
                                    <ListItem><ListItemText primary="Course Prefix" secondary="Required. String, limited characters & format. RegEx: /^[A-Z]{3,4}$/"/></ListItem>
                                    <ListItem><ListItemText primary="Course Number" secondary="Required. Number, limited range. RegEx: /^\d{3}$/"/></ListItem>
                                    <ListItem><ListItemText primary="Course Section" secondary="Required. Number, limited range. RegEx: /^\d{2}$/"/></ListItem>
                              </List>
                        </AccordionDetails>
                  </Accordion>
            </>
      )
}
function OtherFunctions() {
      return (
            <>
                  <Typography variant="h3" sx={{textAlign:"left", mt: "2vh", mb:"3vh"}}>Other Functionalities</Typography>
                  <Divider></Divider>

                  <Typography variant="body1" sx={{textAlign:"left", mt:"2vh"}}>Currently empty; will be expanded upon database implementation.</Typography>

                  {/* <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography variant="body1"></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2"></Typography>
                        </AccordionDetails>
                  </Accordion> */}
            </>
      )
}