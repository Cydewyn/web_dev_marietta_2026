import { Card, Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css';

/* export default function WebInterface() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#121212",
        color: "white",
        p: 4,
      }}
    >
      <Paper
        sx={{
          bgcolor: "#1e1e1e",
          color: "white",
          p: 4,
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Web Interface
        </Typography>
        </Box>
        )} */

export default function Home() {
      return (
            <Box>
                  <Typography variant="h2" sx={{fontSize:"5vh",mb:"3vh",mt:"3vh"}}>Welcome to the Course Management System</Typography>
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
                  <Typography variant="body1" sx={{fontWeight:"bold"}}>Overview</Typography>
                  <Divider sx={{mb:2}}></Divider>
                  <Typography variant="body2">This course registration system allows students to manage their enrollments and instructors to manage their courses.</Typography>
                  <Typography variant="body2"></Typography>
            </Card>
      )
}