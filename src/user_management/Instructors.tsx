import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
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
import { validateInstructorForm } from "./InstructorsValidation";

// Shared styling for every field
const fieldStyles = {
  "& .MuiInputLabel-root": { color: "#bbb" },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": { borderColor: "#777" },
    "&:hover fieldset": { borderColor: "white" },
  },
  "& .MuiSvgIcon-root": { color: "white" },
};

export default function Instructors() {

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
                  {"Add Instructor Help"}
                  </DialogTitle>
                  <DialogContent >
                  <DialogContentText id="alert-dialog-description" sx={{color:"text.primary"}}>
                        <Typography variant="body2">On this page, you can add new instructors before creating courses. The following explains what is acceptable inputs for the following fields.</Typography>
                        <List>
                          <ListItem>
                            <ListItemText primary="Required. Instructor First Name" secondary="Enter the instructor's first name in its entirety. For example, 'David' or 'Fatima.' Spaces, hyphens, and apostrophes are permitted."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Required. Instructor Last Name" secondary="Enter the instructor's last name in its entirety. For example, 'Williams' 'O'Connell', 'al-Sayid' or 'de las Casas.' Spaces, hyphens, and apostrophes are permitted."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Optional. Instructor Department" secondary="Enter the instructor's department. For example, 'English' or 'Mathematics and Computer Science.' Please spell out department names in their entirety with no abbreviations."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Required. Instructor Rank" secondary="Select the instructor's rank from the dropdown. Professor is a senior tenured faculty member. Associate Professor is used for a junior tenured faculty member. Assistant Professor may be used for tenured or tenure-track faculty who do not hold higher positions. Use Instructor for any other case."/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Required. Instructor Email" secondary="Enter the instructor's email. Only @marietta.edu emails are permitted (in the formats ab123@marietta.edu or abc123@marietta.edu)."/>
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
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 600,
          mx: "auto",
          backgroundColor: "background.paper",
        }}
      >
        <Box sx={{display:"inline-flex"}}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{color:"text.primary"}}
          >
            Add Instructor
          </Typography>
          <MakeHelpButton/>
      </Box>

        {/* noValidate turns off the browser's "Please fill out this field" bubble */}
        <Box
          component="form"
          onSubmit={validateInstructorForm}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {/* First Name */}
          <TextField
            id="instructorFirstName"
            label="Instructor First Name"
            variant="outlined"
            fullWidth
            required
            sx={fieldStyles}
          />

          {/* Last Name */}
          <TextField
            id="instructorLastName"
            label="Instructor Last Name"
            variant="outlined"
            fullWidth
            required
            sx={fieldStyles}
          />

          {/* Department */}
          <TextField
            id="instructorDepartment"
            label="Instructor Department"
            variant="outlined"
            fullWidth
            sx={fieldStyles}
          />

          {/* Rank */}
          <TextField
            id="instructorRank"
            label="Instructor Rank"
            select
            defaultValue="Instructor"
            fullWidth
            sx={fieldStyles}
          >
            <MenuItem value="Instructor">Instructor</MenuItem>
            <MenuItem value="Assistant Professor">
              Assistant Professor
            </MenuItem>
            <MenuItem value="Associate Professor">
              Associate Professor
            </MenuItem>
            <MenuItem value="Professor">Professor</MenuItem>
          </TextField>

          {/* Email */}
          <TextField
            id="instructorEmail"
            label="Instructor Email Address"
            variant="outlined"
            fullWidth
            required
            sx={fieldStyles}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ fontWeight: "bold" }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}