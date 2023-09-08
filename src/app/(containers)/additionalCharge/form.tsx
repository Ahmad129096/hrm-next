import { FormikForm, ButtonX } from "@/shared";
import { Field, Form, ErrorMessage } from "formik";
import { Labels } from "../../../static";
import { AdditionalChargeProps } from "../Interfaces";
import {
  CssBaseline,
  Box,
  Checkbox,
  Container,
  Paper,
  Avatar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
} from "@mui/material";

export const AdditionalChargeForm = ({
  initialValue,
  handleSubmit,
  employeePermission,
  isCheck,
  permission,
  employee,
  permissionObject,
}: AdditionalChargeProps) => {
  const {
    PLEASE_WAIT,
    SUBMIT,
    ADDITIONAL,
    PERMISSION,
    CREATE,
    READ,
    UPDATE,
    DELETE,
    MARGIN,
    SELECT_EMPLOYEE,
  } = Labels;
  return (
    <FormikForm
      initialValues={initialValue}
      onSubmit={handleSubmit}
      enableReinitialize
      FormData={(props) => {
        return (
          <Form>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
                <Typography component="h1" variant="h5">
                  {ADDITIONAL}
                </Typography>
                <Paper
                  style={{
                    height: "100%",
                    width: "150%",
                    padding: "30px 30px 30px 30px",
                  }}
                  elevation={24}
                >
                  <Autocomplete
                    size="small"
                    isOptionEqualToValue={(option: any, value) =>
                      option?._id === value._id
                    }
                    getOptionLabel={(option: any) => option?.Name}
                    options={employee?.map((option: any) => option?.usersid)}
                    renderInput={(params) => (
                      <Field
                        as={TextField}
                        name="employeeid"
                        margin={MARGIN}
                        required
                        {...params}
                        label={SELECT_EMPLOYEE}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: <>{params.InputProps.endAdornment}</>,
                        }}
                        helperText={<ErrorMessage name="employee" />}
                        error={props.errors.employee && props.touched.employee}
                        disabled={isCheck}
                      />
                    )}
                    onChange={(_event: any, newValue: any) => {
                      employeePermission(newValue);
                      props.setFieldValue("employeeId", newValue._id);
                    }}
                    onInputChange={(_event: any, _newValue: any) => {}}
                    disabled={isCheck}
                  />

                  {permission && (
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 0 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>{PERMISSION}</TableCell>
                            <TableCell align="center">{CREATE}</TableCell>
                            <TableCell align="center">{READ}</TableCell>
                            <TableCell align="center">{UPDATE}</TableCell>
                            <TableCell align="center">{DELETE}</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {permission?.map((row, i) => (
                            <TableRow
                              key={i}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="center">
                                <Field
                                  as={Checkbox}
                                  id={`permission[${i}].create`}
                                  name={`permission[${i}].create`}
                                  defaultChecked={row.create}
                                  disabled={true}
                                />
                              </TableCell>
                              <TableCell align="center">
                                <Field
                                  as={Checkbox}
                                  id={`permission[${i}].read`}
                                  name={`permission[${i}].read`}
                                  defaultChecked={row.read}
                                  disabled={true}
                                />
                              </TableCell>
                              <TableCell align="center">
                                <Field
                                  as={Checkbox}
                                  id={`permission[${i}].update`}
                                  name={`permission[${i}].update`}
                                  defaultChecked={row.update}
                                  disabled={true}
                                />
                              </TableCell>
                              <TableCell align="center">
                                <Field
                                  as={Checkbox}
                                  id={`permission[${i}].delete`}
                                  name={`permission[${i}].delete`}
                                  defaultChecked={row.delete}
                                  disabled={true}
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                  <hr />
                  <Typography component="h1" variant="h6">
                    Select One Additional Charges & Restrictions
                  </Typography>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="permissionType"
                  >
                    <Field
                      as={FormControlLabel}
                      value="Restriction"
                      control={<Radio />}
                      label="Restriction"
                      helperText={<ErrorMessage name="permissionType" />}
                      error={
                        props.errors.permissionType &&
                        props.touched.permissionType
                      }
                      disabled={isCheck}
                    />
                    <Field
                      as={FormControlLabel}
                      value="Additional Charge"
                      control={<Radio />}
                      label="Additional Charge"
                      helperText={<ErrorMessage name="permissionType" />}
                      error={
                        props.errors.permissionType &&
                        props.touched.permissionType
                      }
                      disabled={isCheck}
                    />
                  </RadioGroup>
                  <Typography component="h1" variant="h6">
                    Select Permissions
                  </Typography>
                  <br />
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 0 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>{PERMISSION}</TableCell>
                          <TableCell align="center">{CREATE}</TableCell>
                          <TableCell align="center">{READ}</TableCell>
                          <TableCell align="center">{UPDATE}</TableCell>
                          <TableCell align="center">{DELETE}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {permissionObject?.map((row, i) => (
                          <TableRow
                            key={i}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="center">
                              <Field
                                as={Checkbox}
                                id={`permission[${i}].create`}
                                name={`permission[${i}].create`}
                                defaultChecked={row.create}
                                disabled={isCheck}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Field
                                as={Checkbox}
                                id={`permission[${i}].read`}
                                name={`permission[${i}].read`}
                                defaultChecked={row.read}
                                disabled={isCheck}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Field
                                as={Checkbox}
                                id={`permission[${i}].update`}
                                name={`permission[${i}].update`}
                                defaultChecked={row.update}
                                disabled={isCheck}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Field
                                as={Checkbox}
                                id={`permission[${i}].delete`}
                                name={`permission[${i}].delete`}
                                defaultChecked={row.delete}
                                disabled={isCheck}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <ButtonX
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: 3 }}
                    disabled={isCheck}
                    endIcon={
                      isCheck && (
                        <CircularProgress
                          size="1.5rem"
                          color="inherit"
                          disableShrink
                        />
                      )
                    }
                    btnText={isCheck ? `${PLEASE_WAIT}` : `${SUBMIT}`}
                  />
                </Paper>
              </Box>
            </Container>
          </Form>
        );
      }}
    />
  );
};
