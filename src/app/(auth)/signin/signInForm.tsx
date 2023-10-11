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
import { Form } from "formik";
import { SignInProps } from "../Interfaces";
import { signInschema } from "../Validation";
import { Content, Labels, routeNames } from "../../../static";
import Link from "next/link";
import { InputField, ButtonX, FormikForm, Icons, CheckField } from "@/shared";

export const SignInForm = ({
  isCheck,
  onSubmit,
  showPassword,
  initialValue,
  handleClickShowPassword,
  handleClickSavePassword,
  handleMouseDownPassword,
}: SignInProps) => {
  const { signUplink } = Content;
  const { MdOutlineVisibilityOff, MdOutlineVisibility, AiOutlineLock } = Icons;
  const {
    EMAIL_USERNAME,
    MARGIN,
    SIGN_IN,
    PASSWORD,
    FIELD_SIZE,
    REMEMBER_ME,
    PLEASE_WAIT,
    SIGIN_HEADING,
    FORGOT_PASSWORD,
  } = Labels;
  const { FORGOTPASSWORD, SIGNUP } = routeNames;

  return (
    <FormikForm
      initialValues={initialValue}
      validationSchema={signInschema}
      onSubmit={onSubmit}
      FormData={(props: any) => (
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
                <AiOutlineLock />
              </Avatar>
              <Typography component="h1" variant="h5">
                {SIGIN_HEADING}
              </Typography>

              <br />
              <Paper
                style={{
                  height: "100%",
                  width: "110%",
                  padding: "30px 30px 30px 30px",
                }}
                elevation={24}
              >
                <Box>
                  <InputField
                    margin={MARGIN}
                    required
                    fullWidth
                    id="email"
                    label={EMAIL_USERNAME}
                    name="email"
                    size={FIELD_SIZE}
                    helpertext="email"
                    error={props.errors.email && props.touched.email}
                    autoComplete="email"
                    disabled={isCheck}
                  />

                  <InputField
                    margin={MARGIN}
                    required
                    fullWidth
                    name="password"
                    size={FIELD_SIZE}
                    label={PASSWORD}
                    type={showPassword ? "text" : "password"}
                    id="outlined-adornment-password"
                    helpertext="password"
                    error={props.errors.password && props.touched.password}
                    autoComplete="current-password"
                    disabled={isCheck}
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
                  />
                  <br />
                  <CheckField
                    name="Remember"
                    sx={{ color: "rgb(84, 84, 84)" }}
                    label={REMEMBER_ME}
                    onChange={handleClickSavePassword}
                  />
                  <ButtonX
                    type="submit"
                    fullWidth
                    btnText={isCheck ? `${PLEASE_WAIT}` : `${SIGN_IN}`}
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
                  />

                  <Grid item xs>
                    <Link href={FORGOTPASSWORD}>{FORGOT_PASSWORD}</Link>
                  </Grid>
                  <Grid item>
                    <Link href={SIGNUP}>{signUplink}</Link>
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Container>
        </Form>
      )}
    />
  );
};
