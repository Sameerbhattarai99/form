// src/validationSchema.js
import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'First name must be at least 3 characters')
    .required('First name is required'),
  lastName: Yup.string()
    .min(3, 'Last name must be at least 3 characters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  gender: Yup.string().required('Gender is required'),
});
