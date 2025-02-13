
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { validationSchema } from '../schema/loginschema'; // Importing validationSchema from loginschema.jsx

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema, // Applying the imported validationSchema
    onSubmit: (values) => {
      console.log('Login data', values);
    },
  });

  return (
    <Container maxWidth="sm">
      <Box className="form-container">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
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
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Login
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/register">Register here</Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
