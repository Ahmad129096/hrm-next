import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Grid,
  Container,
  Typography,
  Avatar,
  CircularProgress,
  Paper,
} from "@mui/material";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { forgotSchema } from "../Validation";
import { Icons } from "@/shared";
import { Labels, routeNames, Content } from "../../../static";
import { forgotPasswordProps } from "../Interfaces";
export const ForgetPasswordForm = ({
  handleSubmit,
  isCheck,
  initialValues,
}: forgotPasswordProps) => {
  const { MdOutlinePassword } = Icons;
  const { signInlink } = Content;
  const { SIGNIN } = routeNames;

  const {
    EMAIL,
    FORGOT_PASSWORD: FORGOT,
    SUBMIT,
    MARGIN,
    FIELD_SIZE,
    PLEASE_WAIT,
  } = Labels;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={forgotSchema}
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
                  <MdOutlinePassword />
                </Avatar>
                <Typography
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  component="h1"
                  variant="h5"
                >
                  {FORGOT}
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
                        id="email"
                        label={EMAIL}
                        size={FIELD_SIZE}
                        name="email"
                        autoComplete="email"
                        helpertext={<ErrorMessage name="email" />}
                        error={props.errors.email && props.touched.email}
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
                        {isCheck ? `${PLEASE_WAIT}` : `${SUBMIT}`}
                      </Button>
                    </Grid>
                    <Link href={SIGNIN}>{signInlink}</Link>
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
