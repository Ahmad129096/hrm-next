"use client";
import { Fragment, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Table,
  Paper,
  Dialog,
  Button,
  MenuItem,
  TableRow,
  Checkbox,
  TableBody,
  TextField,
  TableCell,
  TableHead,
  Typography,
  DialogTitle,
  ButtonGroup,
  DialogActions,
  DialogContent,
  TableContainer,
} from "@mui/material";
import { Labels } from "../../../../static";
import { endPoints } from "../../../../static";
import { useAxios } from "@/hooks";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { DepartmentValidations } from "@/app/(auth)/Validation";

const { GET_MODULE } = endPoints;
const {
  MARGIN,
  STEP_2,
  DES_NAME,
  FIELD_SIZE,
  TYPE_SUBMIT,
  TYPE_SELECT,
  DES_NEW_HEADING,
  ADD_DESIGNATION,
} = Labels;

export const NewDesignation = ({
  open,
  departments,
  handleClose,
  handleClickOpen,
  DesignationHandleSubmit,
}: any) => {
  const { callAxios } = useAxios();
  const steps = ["Labels.STEP_1", " Labels.STEP_2"];
  const [activeStep, setActiveStep] = useState(0);
  const [designation, setDesignation] = useState<any>();
  const [initialValue, setInitialValue] = useState<any>({
    module: [],
    departmentName: "",
    designationName: "",
  });
  const [skipped, setSkipped] = useState(new Set<number>());
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    callAxios({
      method: "get",
      url: GET_MODULE,
    }).then((res: any) => {
      if (res) {
        setDesignation(res.data.module);
        setInitialValue({ module: res.data.module });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>{"Labels.STEP_HEADING"}</Typography>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <Button color="primary" onClick={handleClickOpen}>
              {ADD_DESIGNATION}
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {DES_NEW_HEADING}
              </DialogTitle>
              <DialogContent>
                <Grid>
                  <Grid item>
                    <Formik
                      initialValues={initialValue}
                      validationSchema={DepartmentValidations}
                      onSubmit={DesignationHandleSubmit}
                    >
                      {(props) => {
                        return (
                          <Form>
                            <div>
                              {activeStep === 0 && (
                                <div>
                                  <Field
                                    as={TextField}
                                    select
                                    margin={MARGIN}
                                    required
                                    fullWidth
                                    name="departmentName"
                                    label={STEP_2}
                                    size={FIELD_SIZE}
                                    type={TYPE_SELECT}
                                    id="departmentName"
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
                                        key={option?.department?._id}
                                        value={option?.department?._id}
                                      >
                                        {option?.department?.Name}
                                      </MenuItem>
                                    ))}
                                  </Field>
                                  <Field
                                    as={TextField}
                                    margin={MARGIN}
                                    required
                                    fullWidth
                                    multiline
                                    id="designationName"
                                    size={FIELD_SIZE}
                                    label={DES_NAME}
                                    name="designationName"
                                    autoComplete="name"
                                    helpertext={
                                      <ErrorMessage name="designationName" />
                                    }
                                    error={
                                      props.errors.designationName &&
                                      props.touched.designationName
                                    }
                                  />

                                  <ButtonGroup
                                    variant="outlined"
                                    aria-label="outlined button group"
                                  >
                                    <DialogActions>
                                      <Button
                                        type="submit"
                                        onClick={handleNext}
                                      >
                                        Next
                                      </Button>
                                    </DialogActions>
                                  </ButtonGroup>
                                </div>
                              )}
                            </div>
                            {activeStep === 1 && (
                              <div>
                                <TextField
                                  type="text"
                                  name="rolename"
                                  id="outlined-textarea"
                                  label="Role name"
                                  onChange={(e) => {
                                    props.setFieldValue(
                                      `rolename`,
                                      e.target.value
                                    );
                                  }}
                                />
                                <TableContainer component={Paper}>
                                  <Table
                                    sx={{ minWidth: 650 }}
                                    size="small"
                                    aria-label="a dense table"
                                  >
                                    <TableHead>
                                      <TableRow>
                                        <TableCell>Module</TableCell>
                                        <TableCell align="right">
                                          Create
                                        </TableCell>
                                        <TableCell align="right">
                                          Read
                                        </TableCell>
                                        <TableCell align="right">
                                          Update
                                        </TableCell>
                                        <TableCell align="right">
                                          Delete
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {designation.map(
                                        (row: any, index: any) => (
                                          <TableRow
                                            key={index}
                                            sx={{
                                              "&:last-child td, &:last-child th":
                                                {
                                                  border: 0,
                                                },
                                            }}
                                          >
                                            <TableCell
                                              component="th"
                                              scope="row"
                                            >
                                              <Field
                                                as={Checkbox}
                                                size="small"
                                                id="module"
                                                name="module"
                                                value={row._id}
                                                defaultChecked
                                              />
                                              {row.name}
                                            </TableCell>
                                            <TableCell align="right">
                                              <Field
                                                as={Checkbox}
                                                size="small"
                                                name={`module[${index}.create]`}
                                                id="create"
                                                defaultChecked={row.create}
                                              />
                                            </TableCell>
                                            <TableCell align="right">
                                              <Field
                                                as={Checkbox}
                                                size="small"
                                                name={`module[${index}].read`}
                                                id="read"
                                                defaultChecked={row.read}
                                              />
                                            </TableCell>
                                            <TableCell align="right">
                                              <Field
                                                as={Checkbox}
                                                size="small"
                                                name={`module[${index}].update`}
                                                id="update"
                                                defaultChecked={row.update}
                                              />
                                            </TableCell>
                                            <TableCell align="right">
                                              <Field
                                                as={Checkbox}
                                                size="small"
                                                name={`module[${index}].delete`}
                                                id="delete"
                                                defaultChecked={row.delete}
                                              />
                                            </TableCell>
                                          </TableRow>
                                        )
                                      )}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    pt: 2,
                                  }}
                                >
                                  <Button onClick={handleBack}>Back</Button>
                                  <Box sx={{ flex: "1 1 auto" }}>
                                    <Button type="submit" onClick={handleClose}>
                                      {TYPE_SUBMIT}
                                    </Button>
                                  </Box>
                                </Box>
                              </div>
                            )}
                          </Form>
                        );
                      }}
                    </Formik>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
          </div>
        </Fragment>
      )}
    </>
  );
};
