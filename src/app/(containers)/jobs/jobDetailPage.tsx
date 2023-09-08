import { useEffect, useState } from "react";
import {
  List,
  Avatar,
  Button,
  Divider,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import { endPoints, routeNames } from "../../../static";
import { Icons } from "../../../app/shared";
import { useAxios } from "../../../app/Hooks";
import { useParams, Link } from "react-router-dom";

export const JobDetailPage = () => {
  const { id } = useParams();
  const { callAxios } = useAxios();
  const { JOBDETAILS } = endPoints;
  const { NEW_APPLICATION } = routeNames;
  const [job, setJob] = useState<any>();
  const {
    MdTitle,
    FcDepartment,
    AiOutlineSafety,
    BsFillPersonCheckFill,
    SiWorldhealthorganization,
  } = Icons;
  useEffect(() => {
    callAxios({
      method: "get",
      url: `${JOBDETAILS}/${id}`,
    }).then((res: any) => {
      if (res) {
        setJob(res?.data);
      }
    });
    // eslint-disable-next-line
  }, [id]);
  return (
    <div>
      {job && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <List
          // sx={{
          //   width: "100%",
          //   maxWidth: 360,
          //   bgcolor: "background.paper",
          // }}
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
                <Avatar>
                  <SiWorldhealthorganization />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Organization"
                secondary={job.organizationId[0].organizationName}
              />
            </ListItem>
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
                <Avatar>
                  <AiOutlineSafety />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Status" secondary={job.status} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Requirements"
                secondary={job.requirements}
              />
            </ListItem>
            <Button>
              <Link to={`${NEW_APPLICATION}`}>Apply</Link>
            </Button>
          </List>
        </div>
      )}
    </div>
  );
};
