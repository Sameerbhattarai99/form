import { useFormik } from "formik";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { validationSchema } from "../schema/registrationschema";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <Container maxWidth="sm">
      <Box className="form-container">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Registration Form
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <FormControl
            fullWidth
            margin="normal"
            error={formik.touched.gender && Boolean(formik.errors.gender)}
          >
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {formik.touched.gender && formik.errors.gender && (
              <FormHelperText>{formik.errors.gender}</FormHelperText>
            )}
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? <Link to="/login">Login here</Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
