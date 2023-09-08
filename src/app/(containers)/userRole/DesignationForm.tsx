import { useAxios } from "../../../app/Hooks";
import {
  Box,
  Paper,
  Table,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TextField,
  TableContainer,
} from "@mui/material";
import { endPoints } from "../../../static";
import { Formik, Form, Field } from "formik";
import { useAppDispatch } from "../../../app/Hooks/useDispacter";
import { showSnackbar } from "../../../store/slice/snackbarSlice";

const { UPDATE_USERROLE } = endPoints;

export const DesignationHeading = (props) => {
  const { initialValues } = props;
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();

  const handleSubmit = (value: any) => {
    callAxios({
      data: value,
      method: "post",
      url: UPDATE_USERROLE,
    }).then((res: any) => {
      dispatch(showSnackbar({ message: res.message }));
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ setFieldValue }) => {
        return (
          <Form>
            <div>
              <TextField
                type="text"
                name="UserRole"
                id="outlined-textarea"
                label="UserRole"
                onChange={(e) => {
                  setFieldValue(`UserRole`, e.target.value);
                }}
              />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="collapsible table">
                  <TableBody>
                    {initialValues.designation?.map(
                      (designationData: any, index: any) => (
                        <TableRow key={designationData?._id}>
                          <TableCell component="th" scope="row">
                            <TableRow>
                              <TableCell
                                style={{
                                  paddingBottom: 0,
                                  paddingTop: 0,
                                  border: 0,
                                }}
                                colSpan={6}
                              >
                                <Box sx={{ margin: 1 }}>
                                  <Table size="small" aria-label="purchases">
                                    <TableBody>
                                      <TableRow>
                                        <TableCell component="th" scope="row">
                                          <Field
                                            as={Checkbox}
                                            size="small"
                                            id="designation"
                                            name={`designation[${index}].designation`}
                                            value={designationData._id}
                                            defaultChecked
                                          />
                                          {designationData?.Name}
                                        </TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell
                                          style={{
                                            paddingBottom: 0,
                                            paddingTop: 0,
                                            border: 0,
                                          }}
                                          colSpan={6}
                                        >
                                          <Box sx={{ margin: 1 }}>
                                            <Table
                                              size="small"
                                              aria-label="purchases"
                                            >
                                              <TableRow>
                                                <TableCell>Task</TableCell>
                                                <TableCell>Create</TableCell>
                                                <TableCell>Read</TableCell>
                                                <TableCell>Update</TableCell>
                                                <TableCell>Delete</TableCell>
                                              </TableRow>
                                              <TableBody>
                                                {designationData?.roleid?.module.map(
                                                  (mod: any, i: any) => (
                                                    <TableRow>
                                                      <TableCell>
                                                        {" "}
                                                        <label>
                                                          <span>
                                                            {mod?.name}
                                                          </span>
                                                        </label>
                                                      </TableCell>
                                                      <TableCell>
                                                        {" "}
                                                        <Field
                                                          as={Checkbox}
                                                          size="small"
                                                          name={`designation[${index}].roleid.module[${i}].create`}
                                                          id="create"
                                                          defaultChecked={
                                                            mod?.create
                                                          }
                                                        />
                                                      </TableCell>
                                                      <TableCell>
                                                        {" "}
                                                        <Field
                                                          as={Checkbox}
                                                          size="small"
                                                          name={`designation[${index}].roleid.module[${i}].read`}
                                                          id="read"
                                                          defaultChecked={
                                                            mod?.read
                                                          }
                                                        />
                                                      </TableCell>
                                                      <TableCell>
                                                        {" "}
                                                        <Field
                                                          as={Checkbox}
                                                          size="small"
                                                          name={`designation[${index}].roleid.module[${i}].update`}
                                                          id="update"
                                                          defaultChecked={
                                                            mod?.update
                                                          }
                                                        />
                                                      </TableCell>
                                                      <TableCell>
                                                        {" "}
                                                        <Field
                                                          as={Checkbox}
                                                          size="small"
                                                          name={`designation[${index}].roleid.module[${i}].delete`}
                                                          defaultChecked={
                                                            mod?.delete
                                                          }
                                                        />
                                                      </TableCell>
                                                    </TableRow>
                                                  )
                                                )}
                                              </TableBody>
                                            </Table>
                                          </Box>
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                </Box>
                              </TableCell>
                            </TableRow>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button type="submit" variant="outlined">
                    submit
                  </Button>
                </Box>
              </TableContainer>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
