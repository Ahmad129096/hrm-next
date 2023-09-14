"use client";
import {
  Box,
  Alert,
  Paper,
  styled,
  MenuItem,
  Container,
  TextField,
  Typography,
  CssBaseline,
  LinearProgress,
  CircularProgress,
} from "@mui/material";

import { endPoints, Labels } from "../../../../static";
import { Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ButtonX, FormikForm, Icons } from "@/shared";
import { useAppDispatch, useAxios } from "@/hooks";
import { showSnackbar } from "@/redux/slices/snackbarSlice";

const { MdCloudUpload } = Icons;
const { SUBMIT, PLEASE_WAIT, FIELD_SIZE, MARGIN } = Labels;
const StyledTextField = styled(TextField)`
  textarea {
    resize: both;
    height: 50;
  }
`;
const { APPLY_JOBS } = endPoints;

function nameLengthValidator(file: any) {
  if (file.type !== "application/pdf") {
    return {
      code: "name-too-large",
      message: `please enter valid file`,
    };
  }

  return null;
}

const NewApplication = () => {
  const [check, setCheck] = useState(false);
  const initialState = {
    source: "",
    coverLetter: "",
  };
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({ validator: nameLengthValidator });

  const acceptedFileItems = acceptedFiles.map((file: any) => (
    <>
      <Alert
        style={{ width: "100%", marginTop: "5px" }}
        onClose={() => {}}
        severity="success"
        key={file.path}
      >
        {file.path} - {file.size} bytes
        <LinearProgress variant="determinate" value={100} />
      </Alert>
      <CssBaseline />
    </>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => (
    <>
      <Alert
        style={{ width: "100%", marginTop: "5px" }}
        severity="warning"
        onClose={() => {}}
        key={file.path}
      >
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e: any) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </Alert>
      <CssBaseline />
    </>
  ));
  const onSubmit = (values: any) => {
    setCheck(true);
    const formData: any = new FormData();
    formData.append("file", acceptedFiles);
    formData.append("source", values.source);
    formData.append("coverLetter", values.coverLetter);

    callAxios({
      url: APPLY_JOBS,
      method: "post",
      isJsonType: false,
      data: formData,
    }).then((res: any) => {
      dispatch(showSnackbar({ message: res.message }));
      setCheck(false);
    });
  };
  return (
    <FormikForm
      initialValues={initialState}
      onSubmit={onSubmit}
      FormData={(props: any) => {
        return (
          <>
            <Form autoComplete="off">
              <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h3" component="h1">
                    Submit Application
                  </Typography>
                  <section className="container">
                    <Paper
                      elevation={3}
                      style={{
                        marginTop: "20px",
                        height: "100%",
                        width: "100%",
                        padding: "40px 30px 35px 45px",
                      }}
                    >
                      <div
                        {...getRootProps({ className: "dropzone" })}
                        // multiple={false}
                      >
                        <input {...getInputProps()} />
                        <MdCloudUpload
                          style={{ fontSize: "80px", borderRadius: 20 }}
                        />
                        <Typography variant="h5" component="p">
                          Drag 'n' drop PDF file here, or click to select file
                        </Typography>
                      </div>
                    </Paper>
                    <aside>
                      <br />
                      {acceptedFileItems}
                      {fileRejectionItems}
                    </aside>
                  </section>
                  <br />
                  <Typography variant="h5" component="p">
                    Pre Sources
                  </Typography>
                  <Field
                    as={TextField}
                    select
                    margin={MARGIN}
                    fullWidth
                    name="source"
                    size={FIELD_SIZE}
                    label={"Pre Source"}
                    type="select"
                    id="source"
                    helperText={<ErrorMessage name="source" />}
                    error={props.errors.source && props.touched.source}
                    disabled={check}
                  >
                    <MenuItem value={"social_media"}>Social Media</MenuItem>
                    <MenuItem value={"television"}>Television</MenuItem>
                    <MenuItem value={"newspaper"}>Newspaper</MenuItem>
                  </Field>
                  <Typography variant="h5" component="p">
                    Cover Letter
                  </Typography>
                  <Field
                    as={StyledTextField}
                    margin={MARGIN}
                    label={"Write Your Cover Letter"}
                    multiline
                    fullWidth
                    name="coverLetter"
                    id="coverLetter"
                    helperText={<ErrorMessage name="coverLetter" />}
                    error={
                      props.errors.coverLetter && props.touched.coverLetter
                    }
                    disabled={check}
                    style={{}}
                  />
                  <ButtonX
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: 3 }}
                    disabled={check}
                    endIcon={
                      check ? (
                        <CircularProgress
                          size="1.5rem"
                          color="inherit"
                          disableShrink
                        />
                      ) : (
                        <></>
                      )
                    }
                    btnText={check ? `${PLEASE_WAIT}` : `${SUBMIT}`}
                  />
                </Box>
              </Container>
            </Form>
          </>
        );
      }}
    />
  );
};

export default NewApplication;
