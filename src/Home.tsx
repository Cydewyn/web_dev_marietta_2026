import * as React from 'react';
import { Card, Box, Button, Dialog,DialogTitle, DialogContent,DialogContentText,DialogActions, Typography, List, ListItem, ListItemText, Divider, Accordion, AccordionSummary, AccordionDetails, IconButton} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './index.css';

export default function Home() {

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
                  {"Example Help Dialogue"}
                  </DialogTitle>
                  <DialogContent >
                  <DialogContentText id="alert-dialog-description">
                        Click the button below or outside the alert box to close out.
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

      return (
            <Box sx={{bgcolor:"background.primary"}}>
                  <Box sx={{display:"inline-flex"}}>
                        <Typography variant="h2" sx={{fontSize:"5vh",mb:"3vh",mt:"1vh", color:"text.primary"}}>Welcome to the Course Management System</Typography>
                        <MakeHelpButton/>
                  </Box>
                  
                  <SystemOverview/>
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

function SystemOverview() {
      return (
            <Card sx={{m:4, mt:2, p:2, textAlign:"left"}}>
                  <Typography variant="body1" sx={{fontWeight:"bold"}}>Ready to get started?</Typography>
                  <Divider sx={{mb:1}}></Divider>
                  <List>
                        <ListItem>
                              <ListItemText primary="Navigate the website using the navigation menu at the top of the page." secondary="Want an overview of the website's functionalities? The tabs below give short explainations of what you can do on each tab."/>
                        </ListItem>
                        <ListItem>
                              <ListItemText primary="Need assistance? You can reference the manual by pressing the 'Help' button in the lower right corner of the page." secondary="Anytime you see a question mark ('?') button, you can press it to learn more about how the page functions."/>
                        </ListItem>
                  </List>
            </Card>
      )
}