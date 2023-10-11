//@ts-nocheck
import {
  Box,
  Grid,
  Radio,
  Paper,
  styled,
  Button,
  Container,
  MenuItem,
  TextField,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";

import { useState } from "react";
import { Icons } from "@/shared";
import { Labels, Content } from "../../../static";
// import { addEmployeeprops } from "app/containers/Interfaces";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { useParams } from "next/navigation";
import { addEmployeeValidations } from "@/app/(auth)/Validation";

const { organization_image } = Content;
const { RxCross1, MdDeleteOutline, MdAdd } = Icons;
const {
  EMAIL,
  SUBMIT,
  UPDATE,
  MARGIN,
  TYPE_FILE,
  FIELD_SIZE,
  TYPE_SELECT,
  ADD_EMPLOYEE,
  SELECT_DEPARTMENT,
  SELECT_DESIGNATION,
} = Labels;

const StyledTextField = styled(TextField)`
  textarea {
    resize: both;
  }
`;

export const EmployeeForm = ({
  img,
  loader,
  setLoader,
  departments,
  uploadImage,
  deleteImage,
  designations,
  initialValue,
  addEmployeeHandlesubmit,
}: any) => {
  let params = useParams();
  const [loadingimg, setLoadingimg] = useState<any>(false);

  return (
    <>
      {params?.id ? loader : setLoader(false)}

      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={80} />
        </div>
      ) : (
        <Grid container direction={"column"} spacing={10}>
          <Grid item>
            <Formik
              initialValues={initialValue}
              onSubmit={addEmployeeHandlesubmit}
              validationSchema={addEmployeeValidations}
              enableReinitialize={true}
            >
              {(props) => {
                return (
                  <Container>
                    <div>
                      <Paper
                        elevation={0}
                        style={{
                          marginTop: 8,
                          padding: "30px 30px 35px 45px",
                        }}
                      >
                        <Box sx={{ justifyContent: "center" }}>
                          <Box sx={{ justifyContent: "center" }}>
                            <Typography component="h3" variant="h5">
                              {params?.id ? "Update Employee" : ADD_EMPLOYEE}
                            </Typography>

                            <Form>
                              <Box
                                sx={{
                                  "& .MuiTextField-root": {
                                    m: 1,
                                    width: "500px",
                                  },
                                }}
                              >
                                <div>
                                  <div>
                                    <IconButton
                                      color="primary"
                                      component="label"
                                      aria-label="upload picture"
                                      style={{
                                        position: "relative",
                                        alignItems: "center",
                                      }}
                                    >
                                      <input
                                        hidden
                                        type={TYPE_FILE}
                                        accept="image/*"
                                        onChange={(e: any) => {
                                          setLoadingimg(true);
                                          uploadImage(e, setLoadingimg);
                                        }}
                                      />
                                      {loadingimg ? (
                                        <CircularProgress size={90} />
                                      ) : (
                                        <img
                                          style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "80px",
                                          }}
                                          src={
                                            params?.id
                                              ? !img
                                                ? organization_image
                                                : img
                                              : !img
                                              ? organization_image
                                              : img
                                          }
                                          loading="lazy"
                                          alt="loading"
                                        />
                                      )}
                                    </IconButton>
                                    {img && (
                                      <IconButton>
                                        <RxCross1
                                          style={{
                                            bottom: "25px",
                                            right: "1px",
                                            position: "absolute",
                                          }}
                                          onClick={deleteImage}
                                        />
                                      </IconButton>
                                    )}

                                    <div style={{ display: "flex" }}>
                                      <Field
                                        as={TextField}
                                        required
                                        id="name"
                                        name="name"
                                        label="Name"
                                        margin={MARGIN}
                                        size={FIELD_SIZE}
                                        helpertext={
                                          <ErrorMessage name="name" />
                                        }
                                        error={
                                          props.errors.name &&
                                          props.touched.name
                                        }
                                      />
                                      <Field
                                        as={TextField}
                                        required
                                        id="email"
                                        name="email"
                                        label={EMAIL}
                                        margin={MARGIN}
                                        size={FIELD_SIZE}
                                        autoComplete="email"
                                        helpertext={
                                          <ErrorMessage name="email" />
                                        }
                                        error={
                                          props.errors.email &&
                                          props.touched.email
                                        }
                                      />
                                    </div>
                                  </div>
                                  <Field
                                    as={TextField}
                                    required
                                    id="cnicNo"
                                    name="cnicNo"
                                    label="Cnic Number"
                                    margin={MARGIN}
                                    size={FIELD_SIZE}
                                    helpertext={<ErrorMessage name="cnicNo" />}
                                    error={
                                      props.errors.cnicNo &&
                                      props.touched.cnicNo
                                    }
                                  />
                                  <Field
                                    as={TextField}
                                    required
                                    id="salary"
                                    type="text"
                                    name="salary"
                                    label="Salary"
                                    margin={MARGIN}
                                    size={FIELD_SIZE}
                                    autoComplete="phone"
                                    helpertext={<ErrorMessage name="salary" />}
                                    error={
                                      props.errors.salary &&
                                      props.touched.salary
                                    }
                                  />
                                  <Field
                                    as={TextField}
                                    required
                                    type="text"
                                    margin={MARGIN}
                                    id="phoneNumber"
                                    size={FIELD_SIZE}
                                    name="phoneNumber"
                                    label="Phone Number"
                                    autoComplete="phonenumber"
                                    helpertext={
                                      <ErrorMessage name="phoneNumber" />
                                    }
                                    error={
                                      props.errors.phoneNumber &&
                                      props.touched.phoneNumber
                                    }
                                  />
                                  <Field
                                    as={TextField}
                                    required
                                    margin={MARGIN}
                                    id="optionalNumber"
                                    type={"text"}
                                    size={FIELD_SIZE}
                                    name="optionalNumber"
                                    label="Secondary Phone Number"
                                    helpertext={
                                      <ErrorMessage name="optionalNumber" />
                                    }
                                    error={
                                      props.errors.optionalNumber &&
                                      props.touched.optionalNumber
                                    }
                                  />
                                  <Field
                                    as={TextField}
                                    type="date"
                                    margin={MARGIN}
                                    id="joiningdate"
                                    size={FIELD_SIZE}
                                    name="joiningdate"
                                    label="joiningdate"
                                    InputLabelProps={{
                                      shrink: true,
                                      required: true,
                                    }}
                                  />
                                  <Field
                                    as={TextField}
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    margin={MARGIN}
                                    size={FIELD_SIZE}
                                    autoComplete="Address"
                                  />

                                  <Typography component="h3" variant="h5">
                                    Education
                                  </Typography>

                                  <FieldArray
                                    name="education"
                                    render={(arrayHelpers: any) => (
                                      <div>
                                        {props?.values?.education &&
                                        props?.values?.education.length > 0 ? (
                                          props.values.education.map(
                                            (_education: any, index: any) => (
                                              <div key={index}>
                                                <Field
                                                  as={TextField}
                                                  fullWidth
                                                  id="educationLevel"
                                                  margin={MARGIN}
                                                  size={FIELD_SIZE}
                                                  label="Level of Education"
                                                  name={`education[${index}].educationLevel`}
                                                  helpertext={
                                                    <ErrorMessage
                                                      name={`education[${index}].educationLevel`}
                                                    />
                                                  }
                                                  error={
                                                    arrayHelpers.form.errors
                                                      .education?.[index]
                                                      ?.educationLevel &&
                                                    arrayHelpers.form.touched
                                                      .education?.[index]
                                                      ?.educationLevel
                                                  }
                                                />
                                                <Field
                                                  as={TextField}
                                                  fullWidth
                                                  id="educationSubject"
                                                  margin={MARGIN}
                                                  size={FIELD_SIZE}
                                                  name={`education[${index}].educationSubject`}
                                                  label="Major Subjects"
                                                  helpertext={
                                                    <ErrorMessage
                                                      name={`education[${index}].educationSubject`}
                                                    />
                                                  }
                                                  error={
                                                    arrayHelpers.form.errors
                                                      .education?.[index]
                                                      ?.educationSubject &&
                                                    arrayHelpers.form.touched
                                                      .education?.[index]
                                                      ?.educationSubject
                                                  }
                                                />
                                                <Field
                                                  as={TextField}
                                                  fullWidth
                                                  id="instituteName"
                                                  margin={MARGIN}
                                                  size={FIELD_SIZE}
                                                  name={`education[${index}].instituteName`}
                                                  label="Institute Name"
                                                  helpertext={
                                                    <ErrorMessage
                                                      name={`education[${index}].instituteName`}
                                                    />
                                                  }
                                                  error={
                                                    arrayHelpers.form.errors
                                                      .education?.[index]
                                                      ?.instituteName &&
                                                    arrayHelpers.form.touched
                                                      .education?.[index]
                                                      ?.instituteName
                                                  }
                                                />
                                                <Field
                                                  as={TextField}
                                                  fullWidth
                                                  type="month"
                                                  id="YearOfeducation"
                                                  margin={MARGIN}
                                                  size={FIELD_SIZE}
                                                  name={`education[${index}].YearOfeducation`}
                                                  label="Year Of Education"
                                                  helpertext={
                                                    <ErrorMessage
                                                      name={`education[${index}].YearOfeducation`}
                                                    />
                                                  }
                                                  error={
                                                    arrayHelpers.form.errors
                                                      .education?.[index]
                                                      ?.YearOfeducation &&
                                                    arrayHelpers.form.touched
                                                      .education?.[index]
                                                      ?.YearOfeducation
                                                  }
                                                  InputLabelProps={{
                                                    shrink: true,
                                                    required: true,
                                                  }}
                                                />

                                                <IconButton
                                                  onClick={() =>
                                                    arrayHelpers.remove(index)
                                                  }
                                                >
                                                  <MdDeleteOutline />
                                                </IconButton>
                                                <IconButton
                                                  onClick={() =>
                                                    arrayHelpers.insert(index, {
                                                      instituteName: "",
                                                      educationLevel: "",
                                                      YearOfeducation: "",
                                                      educationSubject: "",
                                                    })
                                                  }
                                                >
                                                  <MdAdd />
                                                </IconButton>
                                              </div>
                                            )
                                          )
                                        ) : (
                                          <Button
                                            onClick={() =>
                                              arrayHelpers.push("")
                                            }
                                          >
                                            Add Education
                                          </Button>
                                        )}
                                      </div>
                                    )}
                                  />
                                  <Typography component="h3" variant="h5">
                                    Experience
                                  </Typography>
                                  <FieldArray
                                    name="experience"
                                    render={(arrayHelpers) => (
                                      <div style={{ display: "flex" }}>
                                        {props?.values?.experience &&
                                        props.values.experience.length > 0 ? (
                                          props.values.experience.map(
                                            (_education: any, index: any) => (
                                              <div key={index}>
                                                <Field
                                                  as={TextField}
                                                  required
                                                  fullWidth
                                                  id="experience"
                                                  margin={MARGIN}
                                                  size={FIELD_SIZE}
                                                  name={`experience[${index}].experiencetitle`}
                                                  label="Title"
                                                  helpertext={
                                                    <ErrorMessage
                                                      name={`experience[${index}].experiencetitle`}
                                                    />
                                                  }
                                                  error={
                                                    arrayHelpers.form.errors
                                                      .experience?.[index]
                                                      ?.experiencetitle &&
                                                    arrayHelpers.form.touched
                                                      .experience?.[index]
                                                      ?.experiencetitle
                                                  }
                                                />
                                                <Field
                                                  as={StyledTextField}
                                                  id="experience"
                                                  multiline
                                                  label="Description"
                                                  name={`experience[${index}].experienceDescription`}
                                                  helpertext={
                                                    <ErrorMessage
                                                      name={`experience[${index}].experienceDescription`}
                                                    />
                                                  }
                                                  error={
                                                    arrayHelpers.form.errors
                                                      .experience?.[index]
                                                      ?.experienceDescription &&
                                                    arrayHelpers.form.touched
                                                      .experience?.[index]
                                                      ?.experienceDescription
                                                  }
                                                />
                                                <Field
                                                  as={TextField}
                                                  required
                                                  fullWidth
                                                  id="experience"
                                                  type="month"
                                                  margin={MARGIN}
                                                  size={FIELD_SIZE}
                                                  name={`experience[${index}].experienceYears`}
                                                  label="Year of experience"
                                                  helpertext={
                                                    <ErrorMessage
                                                      name={`experience[${index}].experienceYears`}
                                                    />
                                                  }
                                                  error={
                                                    arrayHelpers.form.errors
                                                      .experience?.[index]
                                                      ?.experienceYears &&
                                                    arrayHelpers.form.touched
                                                      .experience?.[index]
                                                      ?.experienceYears
                                                  }
                                                  InputLabelProps={{
                                                    shrink: true,
                                                    required: true,
                                                  }}
                                                />

                                                <IconButton
                                                  onClick={() =>
                                                    arrayHelpers.remove(index)
                                                  }
                                                >
                                                  <MdDeleteOutline />
                                                </IconButton>
                                                <IconButton
                                                  onClick={() =>
                                                    arrayHelpers.insert(index, {
                                                      experiencetitle: "",
                                                      experienceYears: "",
                                                      experienceDescription: "",
                                                    })
                                                  }
                                                >
                                                  <MdAdd />
                                                </IconButton>
                                              </div>
                                            )
                                          )
                                        ) : (
                                          <Button
                                            onClick={() =>
                                              arrayHelpers.push("")
                                            }
                                          >
                                            Add Experience
                                          </Button>
                                        )}
                                      </div>
                                    )}
                                  />
                                  <Typography component="h3" variant="h5">
                                    Department & Designation
                                  </Typography>
                                  <div style={{ display: "flex" }}>
                                    <Field
                                      as={TextField}
                                      select
                                      required
                                      label={SELECT_DEPARTMENT}
                                      margin={MARGIN}
                                      size={FIELD_SIZE}
                                      type={TYPE_SELECT}
                                      id="departmentName"
                                      name="departmentName"
                                      defaultValue={initialValue.departmentName}
                                      helpertext={
                                        <ErrorMessage name="departmentName" />
                                      }
                                      error={
                                        props.errors.departmentName &&
                                        props.touched.departmentName
                                      }
                                    >
                                      {departments?.map((option: any) => (
                                        <MenuItem
                                          key={option?._id}
                                          value={option?._id}
                                        >
                                          {option?.Name}
                                        </MenuItem>
                                      ))}
                                    </Field>
                                    <Field
                                      as={TextField}
                                      select
                                      required
                                      fullWidth
                                      label={SELECT_DESIGNATION}
                                      margin={MARGIN}
                                      size={FIELD_SIZE}
                                      type={TYPE_SELECT}
                                      id="designationName"
                                      name="designationName"
                                      disabled={!props.values.departmentName}
                                      helpertext={
                                        <ErrorMessage name="designationName" />
                                      }
                                      error={
                                        props.errors.designationName &&
                                        props.touched.designationName
                                      }
                                    >
                                      {designations?.map((option: any) => (
                                        <MenuItem
                                          key={option?._id}
                                          value={option?._id}
                                        >
                                          {option?.departmentId[0]._id ===
                                            props.values.departmentName &&
                                            option?.Name}
                                        </MenuItem>
                                      ))}
                                    </Field>
                                  </div>
                                  <Typography component="h3" variant="h5">
                                    Gender
                                  </Typography>

                                  <Field name="gender">
                                    {() => (
                                      <RadioGroup
                                        aria-label="gender"
                                        value={props.values.gender}
                                        onChange={(event) => {
                                          props.handleChange(event);
                                          props.setFieldValue(
                                            "gender",
                                            event.target.value
                                          );
                                        }}
                                      >
                                        <div style={{ display: "flex" }}>
                                          <FormControlLabel
                                            value="male"
                                            control={
                                              <Radio name="gender" required />
                                            }
                                            label="Male"
                                          />
                                          <FormControlLabel
                                            value="female"
                                            control={
                                              <Radio name="gender" required />
                                            }
                                            label="Female"
                                          />
                                        </div>
                                      </RadioGroup>
                                    )}
                                  </Field>

                                  <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, borderRadius: 5 }}
                                  >
                                    {params?.id ? UPDATE : SUBMIT}
                                  </Button>
                                </div>
                              </Box>
                            </Form>
                          </Box>
                        </Box>
                      </Paper>
                    </div>
                  </Container>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      )}
    </>
  );
};
