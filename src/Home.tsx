import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css';

// Material Imports
//import Stack from '@mui/material/Stack';

export default function Home() {
      return (
            <Box>
                  <Typography variant="h2" sx={{fontSize:"5vh",mb:"3vh",mt:"3vh"}}>Welcome to the Course Management System</Typography>
                  <Accordion >
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography variant="h3" sx={{fontSize:"3vh"}}>Student Functionalities</Typography></AccordionSummary>
                        <AccordionDetails>
                              <List>
                                    <ListItem>
                                          <ListItemText primary="Register for Courses" secondary="You can sign up for courses using the 'Register Courses' page"></ListItemText>
                                    </ListItem>
                                    <ListItem>
                                          <ListItemText primary="Drop Courses" secondary="You can drop courses using the 'Drop Courses' page"></ListItemText>
                                    </ListItem>
                              </List>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography variant="h3" sx={{fontSize:"3vh"}}>Administrator Functionalities</Typography></AccordionSummary>
                        <AccordionDetails>
                              <List>
                                    <ListItem>
                                          <ListItemText primary="Create Courses" secondary="This functionality is included in the 'Manage Courses' page"></ListItemText>
                                    </ListItem>
                                    <ListItem>
                                          <ListItemText primary="Register Instructors" secondary="You can add instructors using the 'Manage Instructors' page"></ListItemText>
                                    </ListItem>
                                    <ListItem>
                                          <ListItemText primary="Register Students" secondary="You can add students to the system using the 'Manage Students' page"></ListItemText>
                                    </ListItem>
                              </List>
                        </AccordionDetails>
                  </Accordion>
            </Box>
      )
}