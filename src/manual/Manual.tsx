import '../index.css';
import React from 'react';
import {Box, Typography, Button, ButtonGroup, Accordion, Divider, AccordionSummary,AccordionDetails, Card} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserManual from './UserManual';
import ProgrammerManual from './ProgrammerManual';

// Material Imports
//import Stack from '@mui/material/Stack';

export default function Manual() {

      const [manual, setManual] = React.useState('user');

      return ( <>
                  <ManualIntroduction/>

                  <ButtonGroup sx={{alignSelf:'center', mt:1,mb:1}}>
                        <Button onClick={() => setManual("user")}>User Manual</Button>
                        <Button onClick={() => setManual("programmer")}>Programmer Manual</Button>
                  </ButtonGroup>

                  {manual == "user" && (<UserOverview/>)}
                  {manual == "programmer" && (<ProgrammerOverview/>)}

                  <Divider></Divider>
                  
                  <Box>
                        {manual == "user" && (<UserManual/>)} 
                        {manual == "programmer" && (<ProgrammerManual/>)}
                  </Box>
            </>
      )
}

function ManualIntroduction() {
      
      return(
            <Box>
                  <Typography variant="h2" sx={{fontSize: {xs: 32, sm: 40, md: 60}, color:"text.primary"}}>Manuals</Typography>

                  <br></br>
                  <Typography variant="body1">Navigation through the website is performed using the appbar at the top of the page.</Typography>
                  <Typography variant="body2">To access this manual from any page on the website, you can click the 'Help' button in the lower left of the page.</Typography>
                  
            </Box>
      )
}

function UserOverview() {
      return (
            <Card sx={{m:4, mt:2, p:2, textAlign:"left"}}>
                  <Typography variant="body1" sx={{fontWeight:"bold"}}>User Overview </Typography>
                  <Divider sx={{mb:2}}></Divider>
                  <Typography variant="body1">This course registration system is designed to assist students and instructors in enrolling professors and students, adding or dropping classes, as well as managing course information. To learn more about the functionalities of the system, view the FAQ below. More advanced manuals may be found below the FAQ section.</Typography>
            </Card>
      )
}

function ProgrammerOverview() {
      return (
            <Card sx={{m:4, mt:2, p:2, textAlign:"left"}}>
                  <Typography variant="body1" sx={{fontWeight:"bold"}}>Programmer Overview </Typography>
                  <Divider sx={{mb:2}}></Divider>
                  <Typography variant="body1">
                        This course registration system is designed to assist students and instructors in enrolling professors and students, adding or dropping classes, as well as managing course information. 
                        It is built using the React Material UI framework for Typescript. 
                        It has been tested using the Vite programming environment. 
                        The "ReadMe" file for the website has a full list of dependencies for anyone working on the website.
                        Additional information on all aspects of the site may be found in the manuals below.
                  </Typography>
            </Card>
      )
}
