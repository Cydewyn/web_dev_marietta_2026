import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";
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
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 600,
          mx: "auto",
          backgroundColor: "#262626",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ color: "white" }}
        >
          Add Instructor
        </Typography>

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
            sx={fieldStyles}
          />

          {/* Last Name */}
          <TextField
            id="instructorLastName"
            label="Instructor Last Name"
            variant="outlined"
            fullWidth
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