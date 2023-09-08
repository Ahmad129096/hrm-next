import {
  Box,
  Grid,
  Paper,
  Avatar,
  Container,
  Typography,
  CssBaseline,
  CircularProgress,
} from "@mui/material";
import { Form } from "formik";
import { Labels } from "../../../static";
import { styled } from "@mui/system";
import { SignUpOtpProps } from "../Interfaces";
import { signUpOtp } from "../Validation/authValidation";
import { Icons, InputField, ButtonX, FormikForm } from "@/shared";

export const SignUpOtpForm = ({
  counter,
  isCheck,
  resendOtp,
  isDisable,
  initialValue,
  handleSubmit,
}: SignUpOtpProps) => {
  const { ENTER_OTP, MARGIN, FIELD_SIZE, VERIFY, RESEND_OTP, PLEASE_WAIT } =
    Labels;
  const { RiLockPasswordLine } = Icons;
  const MyButton = styled(ButtonX)`
    &&& {
      &.Mui-disabled {
        color: #000;
      }
    }
  `;

  return (
    <FormikForm
      initialValues={initialValue}
      validationSchema={signUpOtp}
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
                  <RiLockPasswordLine />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {ENTER_OTP}
                </Typography>
                <br />
                <Paper
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "30px 40px 40px 40px",
                  }}
                  elevation={24}
                >
                  <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <InputField
                        margin={MARGIN}
                        required
                        fullWidth
                        id="otp"
                        size={FIELD_SIZE}
                        label={ENTER_OTP}
                        name="otp"
                        autoComplete="otp"
                        helperText="otp"
                        error={props.errors.otp && props.touched.otp}
                        autoFocus
                        disabled={isCheck}
                      />
                      <ButtonX
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, borderRadius: 5 }}
                        disabled={isCheck}
                        btnText={isCheck ? `${PLEASE_WAIT}` : `${VERIFY}`}
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
                        <MyButton
                          color="primary"
                          disabled={isDisable}
                          variant="text"
                          onClick={resendOtp}
                          btnText={
                            // my work in this otp timer
                            counter.seconds > 0
                              ? `${RESEND_OTP} in 00:${
                                  counter.seconds < 10 ? "0" : ""
                                }${counter.seconds}`
                              : `${RESEND_OTP}`
                          }
                        />
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
