import {
  Box,
  Grid,
  Paper,
  Avatar,
  Container,
  IconButton,
  Typography,
  CssBaseline,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Labels } from "../../../static";
import { SignUpProps } from "../Interfaces";
import { SignUpValidation } from "../Validation";
import { ErrorMessage, Field, Form } from "formik";
import { InputField, Icons, ButtonX, FormikForm } from "@/shared";
import Link from "next/link";

export const SignUpForm = ({
  SIGNIN,
  isCheck,
  isLoading,
  signInlink,
  inputValue,
  suggestions,
  initialValue,
  handleChange,
  handleSubmit,
  showPassword,
  setIsLoading,
  refreshbutton,
  showReplayIcon,
  handleInputChange,
  setShowReplayIcon,
  showconfirmPassword,
  handleSuggestionClick,
  handleMouseDownPassword,
  handleClickShowPassword,
  handleClickShowConfirmPassword,
}: SignUpProps) => {
  const {
    MdReplay,
    AiOutlineUnlock,
    MdOutlineVisibility,
    MdOutlineVisibilityOff,
  } = Icons;
  const {
    EMAIL,
    MARGIN,
    SIGN_UP,
    USERNAME,
    PASSWORD,
    FIELD_SIZE,
    PLEASE_WAIT,
    CONFIRMPASS,
    REGISTER_BTN,
  } = Labels;

  return (
    <FormikForm
      initialValues={initialValue}
      validationSchema={SignUpValidation}
      onSubmit={handleSubmit}
      FormData={(props: any) => {
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
                  <AiOutlineUnlock />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {SIGN_UP}
                </Typography>
                <br />
                <Paper
                  style={{
                    height: "100%",
                    width: "110%",
                    padding: "30px 30px 40px 40px",
                  }}
                  elevation={24}
                >
                  <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <InputField
                        id="name"
                        name="name"
                        margin={MARGIN}
                        required={true}
                        fullWidth={true}
                        label={USERNAME}
                        helpertext="name"
                        size={FIELD_SIZE}
                        autoComplete="name"
                        value={inputValue}
                        disabled={isCheck}
                        onInput={handleInputChange}
                        error={props.errors.name && props.touched.name}
                      />
                      <Box
                        sx={{
                          width: "120%",
                          display: "flex",
                          marginTop: "10px",
                          marginLeft: "0px",
                          marginRight: "0px",
                        }}
                      >
                        <Box sx={{ width: "80%" }}>
                          {suggestions.length > 0 && (
                            <>
                              <ul
                                style={{
                                  marginTop: 0,
                                  marginLeft: 0,
                                  display: "flex",
                                  flexWrap: "wrap",
                                }}
                              >
                                {suggestions.map((suggestion: any) => (
                                  <li
                                    style={{
                                      color: "white",
                                      padding: "5px",
                                      margin: "2.5px",
                                      listStyle: "none",
                                      fontWeight: "bold",
                                      borderRadius: "5px",
                                      backgroundColor: "#1976d2",
                                    }}
                                    key={suggestion}
                                    onClick={() => {
                                      setShowReplayIcon(false);
                                      handleSuggestionClick(suggestion);
                                    }}
                                  >
                                    {suggestion}
                                  </li>
                                ))}
                              </ul>
                              {setShowReplayIcon(true)}
                            </>
                          )}
                        </Box>
                        <Box sx={{ width: "20%" }}>
                          {isLoading && (
                            <CircularProgress
                              size="1.5rem"
                              sx={{ marginTop: "6px" }}
                              color="inherit"
                              disableShrink
                            />
                          )}
                          {inputValue.length > 2 && showReplayIcon && (
                            <MdReplay
                              color="primary"
                              style={{ fontSize: 40 }}
                              onClick={() => {
                                setIsLoading(true);
                                setShowReplayIcon(false);
                                refreshbutton(inputValue);
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                      <InputField
                        fullWidth
                        id="email"
                        name="email"
                        label={EMAIL}
                        margin={MARGIN}
                        size={FIELD_SIZE}
                        helpertext="email"
                        disabled={isCheck}
                        autoComplete="email"
                        error={props.errors.email && props.touched.email}
                      />
                      <InputField
                        margin={MARGIN}
                        fullWidth
                        name="password"
                        label={PASSWORD}
                        size={FIELD_SIZE}
                        onCut={handleChange}
                        onDrag={handleChange}
                        onDrop={handleChange}
                        onCopy={handleChange}
                        onPaste={handleChange}
                        helpertext="password"
                        autoComplete="current-password"
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        error={props.errors.password && props.touched.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={(e: any) => {
                                  handleMouseDownPassword(e);
                                }}
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
                      <InputField
                        fullWidth
                        margin={MARGIN}
                        id="confirmPassword"
                        name="confirmPassword"
                        size={FIELD_SIZE}
                        label={CONFIRMPASS}
                        onCut={handleChange}
                        onDrag={handleChange}
                        onDrop={handleChange}
                        onCopy={handleChange}
                        onPaste={handleChange}
                        type={showconfirmPassword ? "text" : "password"}
                        helpertext="confirmPassword"
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
                                onMouseDown={(e: any) => {
                                  handleMouseDownPassword(e);
                                }}
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
                      <div style={{ display: "flex", margin: "0 2px" }}>
                        <div style={{ width: "7%" }}>
                          <div>
                            <Field
                              name="check"
                              type="checkbox"
                              helpertext="check"
                              error={props.touched.check && props.errors.check}
                              style={{
                                transform: "scale(1.2)",
                                marginRight: "10px",
                              }}
                            />
                          </div>
                        </div>

                        <div>
                          I agree that I've read and agreed to the
                          <Link href="/terms">Terms and Conditions</Link> {""}{" "}
                          and {""}
                          <Link href="/privacy">Privacy Policy</Link>
                        </div>
                      </div>
                      <div style={{ color: "red" }}>
                        <ErrorMessage name="check" />
                      </div>

                      <ButtonX
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={isCheck}
                        sx={{ mt: 3, mb: 2, borderRadius: 5 }}
                        btnText={isCheck ? `${PLEASE_WAIT}` : `${REGISTER_BTN}`}
                        endIcon={
                          isCheck && (
                            <CircularProgress
                              size="1.5rem"
                              color="inherit"
                              disableShrink
                            />
                          )
                        }
                      />
                    </Grid>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href={SIGNIN}>{signInlink}</Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Box>
            </Container>
          </Form>
        );
      }}
    />
  );
};
