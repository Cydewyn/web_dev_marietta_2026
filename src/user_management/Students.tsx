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
} from "@mui/material";

import { validateStudentForm } from "./StudentsValidation";

function EnrollStudent() {
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
          backgroundColor: "secondary",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: "secondary",
            color: "primary",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            color="textPrimary"
          >
            Enroll Student
          </Typography>

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
                Student's Year
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

