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
import { useParams } from "next/navigation";
import { useAxios } from "@/hooks";
import { Icons } from "@/shared";
import Link from "next/link";

export const JobDetailPage = () => {
  const params = useParams();
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
      url: `${JOBDETAILS}/${params?.id}`,
    }).then((res: any) => {
      if (res) {
        setJob(res?.data);
      }
    });
    // eslint-disable-next-line
  }, [params?.id]);
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
              <Link href={NEW_APPLICATION}>Apply</Link>
            </Button>
          </List>
        </div>
      )}
    </div>
  );
};
