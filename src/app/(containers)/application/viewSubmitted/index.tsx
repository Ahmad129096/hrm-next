import {
  // Chip,
  Table,
  Paper,
  // styled,
  Button,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  ButtonGroup,
  TableContainer,
} from "@mui/material";
import { useAxios } from "../../../../app/Hooks";
import { useEffect, useState } from "react";

export const ViewSubmittedApplications = () => {
  // const StyledTableCell = styled(TableCell)({
  //   padding: 0,
  // });
  const [state, setState] = useState<any>();
  const { callAxios } = useAxios();
  useEffect(() => {
    callAxios({
      url: "api/view-my-application",
    }).then((res: any) => {
      setState(res?.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Jobs Name</TableCell>
            <TableCell align="center">
              <b>Pre&nbsp;Source</b>
            </TableCell>
            <TableCell align="center">Salary Range</TableCell>
            <TableCell align="center">Job Tags</TableCell>
            <TableCell align="center">Resume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state?.map((row: any) => (
            <TableRow
              key={row?._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {}
              </TableCell>
              {/* <TableCell align="center">{row?.jobId[0].title}</TableCell> */}
              <TableCell align="center">{row?.preSource}</TableCell>
              {/* <TableCell align="center">{row.jobId[0].salaryrange}</TableCell> */}
              {/* {row?.jobId[0].jobtag?.map((job) => (
                <div style={{ width: "0px" }}>
                  <StyledTableCell align="center">
                    <Chip
                      label={job.jobSearchtag}
                      color="primary"
                      size="small"
                      variant="outlined"
                    />
                  </StyledTableCell>
                </div>
              ))} */}
              <TableCell align="center">
                {" "}
                <ButtonGroup variant="text" aria-label="text button group">
                  <Button>View</Button>
                  <Button>Download</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
