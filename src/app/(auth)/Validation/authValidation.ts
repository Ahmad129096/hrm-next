import * as yup from "yup";
import { validations } from "./validations";
const { name, email,email_username, password, confirmPassword, type,otp,check } = validations;
export const SignUpValidation = yup.object().shape({
  name: name,
  email: email,
  password: password,
  confirmPassword: confirmPassword,
  type: type,
  check:check
});
  

export const signInschema = yup.object().shape({
  email: email_username,
  password: password,
});

export const forgotSchema = yup.object().shape({
  email: email,
});

export const signUpOtp = yup.object().shape({
  otp : otp
});
export const resetPassword = yup.object().shape({
  email: email,
  password: password,
  confirmPassword: confirmPassword,
});