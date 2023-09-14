/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useState } from "react";
import {
  Box,
  Grid,
  styled,
  Button,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  CssBaseline,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { Icons, MenuField, ViewJobSkeleton } from "@/shared";
import { Content, Labels } from "@/static";

const StyledTextField = styled(TextField)`
  textarea {
    resize: both;
    height: 50;
  }
`;

const { RxCross1 } = Icons;
const { organization_image } = Content;
const { TITLE, TYPE_FILE, JOB_REQUIREMENTS } = Labels;

export const EditJobForm = ({
  img,
  names,
  check,
  employees,
  department,
  deleteImage,
  designation,
  uploadImage,
  handleSubmit,
  initialValue,
  getDesignation,
}: any) => {
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [designationOpen, setDesignationOpen] = useState(false);

  const loadingDepartment = departmentOpen && department.length === 0;
  const loadingDesignation = designationOpen && designation.length === 1;

  console.log({ check });

  return (
    <>
      {names.length === 0 ? (
        <ViewJobSkeleton />
      ) : (
        <Grid container direction={"column"} spacing={10}>
          <Grid item>
            <Formik initialValues={initialValue} onSubmit={handleSubmit}>
              {({ setFieldValue, setFieldTouched }) => {
                return (
                  <div>
                    <Form>
                      <Box
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "500px" },
                        }}
                      >
                        <Box
                          sx={{
                            marginTop: 5,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 10,
                          }}
                        >
                          <Typography component="h1" variant="h5">
                            Create Job Request
                          </Typography>
                          <CssBaseline />
                          <div>
                            {check ? (
                              "image uploading..."
                            ) : (
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                                style={{ position: "relative" }}
                              >
                                <input
                                  hidden
                                  accept="image/*"
                                  onChange={uploadImage}
                                  type={TYPE_FILE}
                                />
                                <img
                                  style={{
                                    height: "150px",
                                    width: "150px",
                                    borderRadius: "80px",
                                  }}
                                  src={!img ? organization_image : img.Location}
                                />
                              </IconButton>
                            )}

                            {!check && img && (
                              <RxCross1
                                className="my_delete_icon"
                                style={{
                                  right: "1px",
                                  top: "1px",
                                  cursor: "pointer",
                                }}
                                onClick={deleteImage}
                              />
                            )}
                          </div>
                          <Typography component="h1" variant="h6">
                            Enter Data in this Form
                          </Typography>
                          <CssBaseline />
                          <Field
                            as={TextField}
                            required
                            fullWidth
                            id="title"
                            label={TITLE}
                            name="title"
                            size="small"
                          />
                          <Field
                            as={TextField}
                            id="noOfPositions"
                            label="No of Positions"
                            name="noOfPositions"
                            type="number"
                            size="small"
                            inputProps={{ min: 1, max: 10000 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            required
                          />

                          <Autocomplete
                            id="department"
                            options={department}
                            getOptionLabel={(option: any) => option.Name}
                            onOpen={() => {
                              setDepartmentOpen(true);
                            }}
                            onClose={() => {
                              setDepartmentOpen(false);
                            }}
                            loading={loadingDepartment}
                            isOptionEqualToValue={(option: any, value) =>
                              option?._id === value._id
                            }
                            renderInput={(params) => (
                              <Field
                                as={TextField}
                                name="department"
                                {...params}
                                label="Department"
                                size="small"
                                placeholder="Enter department"
                                InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (
                                    <Fragment>
                                      {loadingDepartment ? (
                                        <CircularProgress
                                          color="inherit"
                                          size={20}
                                        />
                                      ) : null}
                                      {params.InputProps.endAdornment}
                                    </Fragment>
                                  ),
                                }}
                              />
                            )}
                            onChange={(_event: any, newValue: any | null) => {
                              (newValue || newValue === "") &&
                                setFieldValue("department", newValue._id);
                              getDesignation(newValue);
                            }}
                            onInputChange={(_event: any, _newValue) => {
                              setFieldValue("designation", "");
                              setFieldTouched("designation", false);
                              setFieldTouched("department", false);
                            }}
                          />
                          <Autocomplete
                            // multiple
                            id="designation"
                            options={designation}
                            onOpen={() => {
                              setDesignationOpen(true);
                            }}
                            onClose={() => {
                              setDesignationOpen(false);
                            }}
                            loading={loadingDesignation}
                            isOptionEqualToValue={(option: any, value) =>
                              option?._id === value._id
                            }
                            getOptionLabel={(option: any) => option.Name}
                            onChange={(_, id) =>
                              (id || id === "") &&
                              setFieldValue("designation", id)
                            }
                            renderInput={(params) => (
                              <Field
                                as={TextField}
                                name="designation"
                                {...params}
                                label="Designation"
                                placeholder="Enter designation"
                                size="small"
                                InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (
                                    <Fragment>
                                      {loadingDesignation ? (
                                        <CircularProgress
                                          color="inherit"
                                          size={20}
                                        />
                                      ) : null}
                                      {params.InputProps.endAdornment}
                                    </Fragment>
                                  ),
                                }}
                              />
                            )}
                          />
                          <MenuField
                            margin={"NORMAL"}
                            required
                            fullWidth
                            name="salaryrange"
                            label={"Salary Range"}
                            size={"small"}
                            id="salaryrange"
                            helperText="salaryRange"
                            menuData={data.map((option: any, i) => (
                              <MenuItem
                                key={i}
                                value={option.salaryRange ?? " "}
                              >
                                {option?.salaryRange ?? " "}
                              </MenuItem>
                            ))}
                          />
                          <MenuField
                            margin={"NORMAL"}
                            required
                            fullWidth
                            name="employmentType"
                            label={"Employment Type"}
                            size={"small"}
                            id="employmentType"
                            helperText="employmentType"
                            menuData={employmentType.map((option: any, i) => (
                              <MenuItem key={i} value={option.type ?? " "}>
                                {option?.type ?? " "}
                              </MenuItem>
                            ))}
                          />

                          <Autocomplete
                            multiple
                            id="jobtag"
                            options={names}
                            getOptionLabel={(option: any) =>
                              option.jobSearchtag
                            }
                            onChange={(_, _id) => setFieldValue("jobtag", _id)}
                            filterSelectedOptions
                            renderInput={(params) => (
                              <Field
                                as={TextField}
                                name="jobtag"
                                {...params}
                                label="Job Tags"
                                size="small"
                                placeholder="Enter Job Tags"
                              />
                            )}
                          />

                          <Autocomplete
                            multiple
                            id="responsibleper"
                            options={employees}
                            getOptionLabel={(option: any) => option.Name}
                            onChange={(_, _id) =>
                              setFieldValue("responsibleper", _id)
                            }
                            renderInput={(params) => (
                              <Field
                                as={TextField}
                                name="responsibleper"
                                {...params}
                                size="small"
                                label="Responsible Person"
                                placeholder="Enter responsible person name"
                              />
                            )}
                          />

                          <Field
                            as={StyledTextField}
                            multiline
                            id="requirements"
                            name="requirements"
                            placeholder={JOB_REQUIREMENTS}
                            inputProps={{
                              style: {
                                height: "60px",
                              },
                            }}
                          />

                          <Button variant="contained" type="submit">
                            Submit
                          </Button>
                        </Box>
                      </Box>
                    </Form>
                  </div>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      )}
    </>
  );
};
const data = [
  {
    salaryRange: "10-20k",
  },
  {
    salaryRange: "20-30k",
  },
  {
    salaryRange: "30-50k",
  },
];
const employmentType = [
  {
    type: "Full-time employment",
  },
  {
    type: "Part-time employment",
  },
  {
    type: "Casual employment",
  },
  {
    type: "Contract employment",
  },
  {
    type: "Apprenticeship",
  },
  {
    type: "Traineeship",
  },
  {
    type: "Probation",
  },
  {
    type: "Employment on commission",
  },
];
