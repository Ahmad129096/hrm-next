import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { resetPassword } from "../Validation";
import { Labels } from "../../../static";
import { resetForm } from "../Interfaces";
import { Icons } from "@/shared";

export const ResetForm = ({
  initialValue,
  handleSubmit,
  handleMouseDownPassword,
  handleMouseDownConfirmPassword,
  handleClickShowPassword,
  handleClickShowConfirmPassword,
  isCheck,
  showPassword,
  showconfirmPassword,
}: resetForm) => {
  const { MdOutlineVisibilityOff, MdOutlineVisibility, GrPowerReset } = Icons;
  const {
    NEWPASSWORD,
    CONFIRMNEWPASS,
    RESET_PASSWORD,
    RESET_BTN,
    MARGIN,
    FIELD_SIZE,
    PLEASE_WAIT,
  } = Labels;

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={resetPassword}
      onSubmit={handleSubmit}
    >
      {(props) => {
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
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <GrPowerReset />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {RESET_PASSWORD}
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Paper
                    elevation={24}
                    style={{
                      height: "100%",
                      width: "110%",
                      padding: "40px 30px 35px 45px",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Field
                        as={TextField}
                        margin={MARGIN}
                        required
                        fullWidth
                        name="password"
                        size={FIELD_SIZE}
                        label={NEWPASSWORD}
                        type={showPassword ? "text" : "password"}
                        id="outlined-adornment-password"
                        helperText={<ErrorMessage name="password" />}
                        error={props.errors.password && props.touched.password}
                        autoComplete="current-password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <MdOutlineVisibilityOff />
                                ) : (
                                  <MdOutlineVisibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        disabled={isCheck}
                      />

                      <Field
                        as={TextField}
                        margin={MARGIN}
                        required
                        fullWidth
                        name="confirmPassword"
                        label={CONFIRMNEWPASS}
                        size={FIELD_SIZE}
                        type={showconfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        helperText={<ErrorMessage name="confirmPassword" />}
                        error={
                          props.errors.confirmPassword &&
                          props.touched.confirmPassword
                        }
                        autoComplete="current-confirmPassword"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownConfirmPassword}
                              >
                                {showconfirmPassword ? (
                                  <MdOutlineVisibilityOff />
                                ) : (
                                  <MdOutlineVisibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        disabled={isCheck}
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, borderRadius: 5 }}
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
                      >
                        {isCheck ? `${PLEASE_WAIT}` : `${RESET_BTN}`}
                      </Button>
                    </Grid>
                  </Paper>
                </Box>
              </Box>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};
