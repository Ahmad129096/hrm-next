import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import { InputFieldProps } from "./Interface";
export const InputField = ({
  id,
  margin,
  name,
  label,
  size,
  type,
  helperText,
  error,
  autoComplete,
  disabled,
  InputProps,
  required,
  fullWidth,
  autoFocus,
  onSelect,
  onPaste,
  onInput,
  value
}: InputFieldProps) => { 
  return (
    <Field
      as={TextField}
      id={id}
      margin={margin}
      name={name}
      onInput={onInput}
      onPaste={onPaste}
      label={label}
      size={size}
      type={type}
      helperText={<ErrorMessage name={helperText} />}
      error={error}
      autoComplete={autoComplete}
      disabled={disabled}
      InputProps={InputProps}
      onSelect={onSelect}
      required={required}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      value={value}
    />
  );
};


export const CheckField = ({
  id,
  name,
  helperText,
  error,
  disabled,
  label,
  onChange,
  value,
}: InputFieldProps) => {
  return (
    <Field
      as={FormControlLabel}
      id={id}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      control={<Checkbox color="primary" />}
      helperText={<ErrorMessage name={helperText} />}
      error={error}
      disabled={disabled}
    />
  );
};
export const MenuField = ({
  id,
  margin,
  name,
  label,
  size,
  type,
  helperText,
  error,
  autoComplete,
  disabled,
  InputProps,
  required,
  fullWidth,
  autoFocus,
  menuData,
  onSelect
}: InputFieldProps) => {
  return (
    <Field
      as={TextField}
      id={id}
      margin={margin}
      name={name}
      label={label}
      size={size}
      type={type}
      helperText={<ErrorMessage name={helperText} />}
      error={error}
      autoComplete={autoComplete}
      disabled={disabled}
      InputProps={InputProps}
      required={required}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      select={true}
      onSelect={onSelect}
    >
      {menuData}
    </Field>
  );
};