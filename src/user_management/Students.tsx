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
import * as React from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { validateStudentForm } from "./StudentsValidation";

function EnrollStudent() {

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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 4,
          backgroundColor: "background.default",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: "background.paper",
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
              Register Student
            </Typography>
            <MakeHelpButton/>
          </Box>

          <Box
            component="form"
            onSubmit={validateStudentForm}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Student First Name */}
            <TextField
              label="Student's First Name"
              id="studentFirstName"
              variant="outlined"
              fullWidth
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

            {/* Student Last Name */}
            <TextField
              label="Student's Last Name"
              id="studentLastName"
              variant="outlined"
              fullWidth
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

            {/* Student Year */}
            <FormControl
              fullWidth
              sx={{
                backgroundColor: "primary",
                borderRadius: 1,
                "& .MuiInputLabel-root": {
                  color: "secondary",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "secondary",
                },
                "& .MuiOutlinedInput-root": {
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
                "& .MuiSelect-icon": {
                  color: "secondary",
                },
              }}
            >
              <InputLabel id="student-year-label">
                Student's Class Year
              </InputLabel>

              <Select
                labelId="student-year-label"
                id="studentYear"
                label="Student's Year"
                defaultValue="Freshman"
              >
                <MenuItem value="Freshman">Freshman</MenuItem>
                <MenuItem value="Sophomore">Sophomore</MenuItem>
                <MenuItem value="Junior">Junior</MenuItem>
                <MenuItem value="Senior">Senior</MenuItem>
              </Select>
            </FormControl>

            {/* Student Major */}
            <TextField
              label="Student's Major"
              id="studentMajor"
              variant="outlined"
              fullWidth
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

            {/* Student Email */}
            <TextField
              label="Student's Email Address"
              id="studentEmail"
              variant="outlined"
              fullWidth
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

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "primary",
                color: "secondary",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "info",
                },
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

export default EnrollStudent;

