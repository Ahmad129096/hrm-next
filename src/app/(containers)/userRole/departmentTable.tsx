import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useAxios } from "../../../app/Hooks";
import { endPoints } from "../../../static";
import { useEffect, useState } from "react";

function Row(designationData: any) {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, border: 0 }}
          colSpan={6}
        >
          <Box sx={{ margin: 1 }}>
            <Table size="small" aria-label="purchases">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {designationData.row.Name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0, border: 0 }}
                    colSpan={6}
                  >
                    <Box sx={{ margin: 1 }}>
                      <Table size="small" aria-label="purchases">
                        <TableHead>
                          <TableRow>
                            <TableCell>Task</TableCell>
                            <TableCell>Create</TableCell>
                            <TableCell>Read</TableCell>
                            <TableCell>Update</TableCell>
                            <TableCell>Delete</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {designationData.row.roleid[0].Permissions.map(
                            (x: any) => {
                              return Object.keys(x).map((y: any) => {
                                return (
                                  <TableRow>
                                    <TableCell>{y}</TableCell>
                                    <TableCell>
                                      {" "}
                                      <Checkbox defaultChecked size="small" />
                                    </TableCell>
                                    <TableCell>
                                      {" "}
                                      <Checkbox defaultChecked size="small" />
                                    </TableCell>
                                    <TableCell>
                                      {" "}
                                      <Checkbox defaultChecked size="small" />
                                    </TableCell>
                                    <TableCell>
                                      {" "}
                                      <Checkbox defaultChecked size="small" />
                                    </TableCell>
                                  </TableRow>
                                );
                              });
                            }
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
    </React.Fragment>
  );
}

export function DepartmentTable() {
  const { callAxios } = useAxios();
  const [designation, setDesignation] = useState([]);

  const { GET_DESIGNATION } = endPoints;
  useEffect(() => {
    callAxios({
      url: GET_DESIGNATION,
      method: "get",
    }).then((res: any) => {
      setDesignation(res?.data);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <TableContainer component={Paper}>
      <TextField id="outlined-search" label="role name" type="search" />

      <Table sx={{ minWidth: 500 }} aria-label="collapsible table">
        <TableBody>
          {designation.map((designationData: any) => (
            <TableRow key={designationData?._id}>
              <TableCell component="th" scope="row">
                <Row row={designationData} />
              </TableCell>
            </TableRow>
          ))}
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
        {" "}
        <Button variant="outlined">submit</Button>
      </Box>
    </TableContainer>
  );
}
