import {
  CssBaseline,
  Box,
  Grid,
  Container,
  Typography,
  CircularProgress,
  Paper,
  Avatar,
} from "@mui/material";

import { signUpOtp } from "../Validation";
import { Labels } from "../../../static";
import { styled } from "@mui/system";
import { resetOtpProps } from "../Interfaces";
import { Form } from "formik";
import { ButtonX, FormikForm, Icons, InputField } from "@/shared";

export const ResetOtpForm = ({
  initialValue,
  handleSubmit,
  resendOtp,
  isDisable,
  isCheck,
  time,
}: resetOtpProps) => {
  const { ENTER_OTP, MARGIN, FIELD_SIZE, VERIFY, PLEASE_WAIT, RESEND_OTP } =
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
      onSubmit={handleSubmit}
      validationSchema={signUpOtp}
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
                        btnText={isCheck ? `${PLEASE_WAIT}` : `${VERIFY}`}
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
                    </Grid>
                    <MyButton
                      color="primary"
                      disabled={isDisable}
                      variant="text"
                      onClick={() => {
                        resendOtp();
                      }}
                      btnText={
                        time.seconds > 0
                          ? `${RESEND_OTP} in 00:${
                              time.seconds < 10 ? "0" : ""
                            }${time.seconds}`
                          : `${RESEND_OTP}`
                      }
                    />
                  </Paper>
                </Box>
              </Box>
            </Container>
          </Form>
        );
      }}
    />
  );
};
