import {
  Grid,
  Paper,
  Dialog,
  Button,
  TextField,
  ButtonGroup,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { Labels } from "../../../../static";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { addDepartment } from "../../Interfaces";
import { newDeaprtment } from "@/app/(auth)/Validation";

const {
  MARGIN,
  DEP_NAME,
  FIELD_SIZE,
  TYPE_SUBMIT,
  TYPE_CANCEL,
  ADD_DEPARTMENT,
} = Labels;
const paperStyle = { width: 400, height: 250 };

export const NewDepartmentForm = ({
  open,
  handleClose,
  initialValue,
  handleClickOpen,
  newDepartmentSubmit,
}: addDepartment) => {
  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        {ADD_DEPARTMENT}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{ADD_DEPARTMENT}</DialogTitle>
        <DialogContent>
          <Paper elevation={0} style={paperStyle}>
            <Grid container direction={"column"} spacing={10}>
              <Grid item>
                <Formik
                  initialValues={initialValue}
                  validationSchema={newDeaprtment}
                  onSubmit={(values, { resetForm }) => {
                    newDepartmentSubmit(values);
                    handleClose(values);
                    resetForm();
                  }}
                >
                  {(props) => {
                    return (
                      <Form>
                        <Field
                          as={TextField}
                          margin={MARGIN}
                          required
                          fullWidth
                          id="departmentName"
                          size={FIELD_SIZE}
                          label={DEP_NAME}
                          name="departmentName"
                          helperText={<ErrorMessage name="departmentName" />}
                          error={
                            props.errors.departmentName &&
                            props.touched.departmentName
                          }
                        />
                        <ButtonGroup
                          variant="outlined"
                          aria-label="outlined button group"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <DialogActions>
                            <Button type="submit" onClick={newDepartmentSubmit}>
                              {TYPE_SUBMIT}
                            </Button>
                          </DialogActions>
                          <DialogActions>
                            <Button
                              type="reset"
                              autoFocus
                              onClick={handleClose}
                            >
                              {TYPE_CANCEL}
                            </Button>
                          </DialogActions>
                        </ButtonGroup>
                      </Form>
                    );
                  }}
                </Formik>
              </Grid>
            </Grid>
          </Paper>
        </DialogContent>
      </Dialog>
    </div>
  );
};
