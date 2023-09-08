import { useEffect, useState } from "react";
import {
  List,
  Stack,
  Button,
  Avatar,
  styled,
  Divider,
  ListItem,
  TextField,
  Typography,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import { endPoints } from "../../../static";
import { Icons } from "../../../app/shared";
import { useAxios } from "../../../app/Hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useAppDispatch } from "../../../app/Hooks/useDispacter";
import { showSnackbar } from "../../../store/slice/snackbarSlice";
// Formik

const StyledTextField = styled(TextField)`
  textarea {
    resize: both;
    height: 50;
  }
`;
const { MdTitle, FcDepartment, BsFillPersonCheckFill } = Icons;

export const JobAcceptPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const { JOBDETAILS } = endPoints;
  const [job, setJob] = useState<any>();

  useEffect(() => {
    callAxios({
      method: "get",
      url: `${JOBDETAILS}/${id}`,
    }).then((res: any) => {
      console.log(res, "jobs");
      if (res) {
        setJob(res.data);
      }
    });
    // eslint-disable-next-line
  }, [id]);
  const publish = (value) => {
    callAxios({
      method: "put",
      url: `api/publishjobsControllers/${id}`,
      data: value,
    }).then((res: any) => {
      dispatch(showSnackbar({ message: res.message }));
      navigate("/viewjob");
    });
  };
  return (
    <div>
      {job && (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h3" component="h2">
            Job Details
          </Typography>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MdTitle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Title" secondary={job.title} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Designation"
              secondary={job.designationId.Name}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FcDepartment />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Department"
              secondary={job.departmentId.Name}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BsFillPersonCheckFill />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Posted by"
              secondary={job.createdby[0]?.Name}
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Requirements" secondary={job.requirements} />
          </ListItem>
          <Formik
            initialValues={{}}
            // validationSchema={signInschema}
            onSubmit={publish}
          >
            <Form>
              <div>
                <Field
                  style={{ width: "100%" }}
                  as={StyledTextField}
                  multiline
                  id="requirements"
                  name="requirements"
                  placeholder={"JOB_REQUIREMENTS"}
                  inputProps={{
                    style: {
                      height: "60px",
                    },
                  }}
                />
              </div>
              <br />
              <Stack direction="row" spacing={2}>
                <Button variant="contained" type="submit">
                  Accept & Publish
                </Button>
                <Button variant="contained" color="error">
                  Reject
                </Button>
                <Button onClick={() => navigate("/viewjob")}>Cancel</Button>
              </Stack>
            </Form>
          </Formik>
        </List>
      )}
    </div>
  );
};
