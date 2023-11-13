"use client";
import { useEffect, useState } from "react";
import { routeNames } from "../../../static";
import { Chart } from "react-google-charts";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import { useAppSelector, useAxios } from "@/hooks";
import { useRouter } from "next/navigation";

export const Welcome = () => {
  const [data, setData] = useState({
    job: "",
    employee: "",
    interview: "",
    application: "",
  });

  const router = useRouter();
  const { callAxios } = useAxios();
  const { CREATE_ORGANIZATION } = routeNames;
  const userStatus = useAppSelector((state) => state.status);

  useEffect(() => {
    if (!(userStatus.createOrganization && userStatus.selectDepartments)) {
      router.push(CREATE_ORGANIZATION);
    }
    callAxios({
      url: "/dashboard-data",
    }).then((res: any) => {
      setData({
        job: res?.jobData,
        employee: res?.employeeData,
        interview: res?.interviewData,
        application: res?.applicationData,
      });
    });

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1>HRMS Dashboard</h1>
      <Box>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="space-evenly"
        >
          <Grid>
            <Card sx={{ marginTop: 5, minWidth: 550, minHeight: 130 }}>
              <CardContent>
                <Chart
                  width="100%"
                  height="400px"
                  chartType="Line"
                  data={chartData}
                />
              </CardContent>
            </Card>{" "}
          </Grid>
          <Grid>
            <Card sx={{ marginTop: 5, minWidth: 550, minHeight: 130 }}>
              <CardContent>
                <Chart
                  width="100%"
                  height="400px"
                  data={chartData}
                  chartType="ColumnChart"
                />
              </CardContent>
            </Card>{" "}
          </Grid>
          <Grid>
            <Card sx={{ marginTop: 5, minWidth: 550, minHeight: 130 }}>
              <CardContent>
                <Chart
                  width="100%"
                  height="400px"
                  data={chartdata}
                  chartType="ColumnChart"
                />
              </CardContent>
            </Card>{" "}
          </Grid>
          <Grid>
            <Card sx={{ marginTop: 5, minWidth: 550, minHeight: 130 }}>
              <CardContent>
                <Chart
                  width="100%"
                  height="400px"
                  diffdata={diffdata}
                  chartType="ColumnChart"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ marginTop: 5, minWidth: 550, minHeight: 200 }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Active Employees
                </Typography>
                <Typography variant="h1" color="text.secondary">
                  {data?.employee}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ marginTop: 5, minWidth: 550, minHeight: 200 }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Total Jobs
                </Typography>
                <Typography variant="h1" color="text.secondary">
                  {data?.job}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ marginTop: 5, minWidth: 550, minHeight: 200 }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Scheduled Interveiws
                </Typography>
                <Typography variant="h1" color="text.secondary">
                  {data?.interview}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ marginTop: 5, minWidth: 550, minHeight: 200 }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Submitted Applications
                </Typography>
                <Typography variant="h1" color="text.secondary">
                  {data?.application}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

//------------------chart Data ----------------------------
export const chartData = [
  ["HRMS", "Organizations", "Departments", "Designations"],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 4.7],
  [12, 6.6, 8.4, 5.2],
  [13, 4.8, 6.3, 3.6],
  [14, 4.2, 6.2, 3.4],
];
const dataOld = [
  ["Name", "HRMS"],
  ["Department", 250],
  ["Designation", 4200],
  ["Permission", 2900],
  ["Employee", 8200],
];

const dataNew = [
  ["Name", "HRMS"],
  ["Depatment", 370],
  ["Designation", 600],
  ["Permission", 700],
  ["Employee", 1500],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};
const columns = [
  { type: "string", id: "HRMS" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
];

const rows = [
  ["Department", new Date(1789, 3, 30), new Date(1797, 2, 4)],
  ["Designation", new Date(1797, 2, 4), new Date(1801, 2, 4)],
  ["Permissions", new Date(1801, 2, 4), new Date(1809, 2, 4)],
];

export const chartdata = [columns, ...rows];
