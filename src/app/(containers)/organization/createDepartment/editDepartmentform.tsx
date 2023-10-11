"use client";
import React, { useState } from "react";
import {
  // Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Typography,
  Paper,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
// import { KeyboardArrowDown as KeyboardArrowDownIcon, KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
// import { Labels } from 'static';
import { NewDepartment } from "./newDeparment";
import { EditDepartment } from "../../Interfaces";
import { NewDesignation } from "./newDesignation";

export const EditDepartmentForm = ({
  newDepartmentSubmit,
  departments,
  designations,
  renameDepartment,
  deleteDepartment,
  newName,
  handleNameChange,
  errors,
  handleClickOpen,
  handleClose,
  open,
  DesignationHandleSubmit,
}: EditDepartment) => {
  const [openRows, setOpenRows] = useState<string[]>([]);

  const handleRowToggle = (id: string) => {
    if (isOpen(id)) {
      setOpenRows(openRows.filter((rowId) => rowId !== id));
    } else {
      setOpenRows([...openRows, id]);
    }
  };

  const isOpen = (id: string) => {
    return openRows.includes(id);
  };
  console.log("Designations:", designations);
  console.log("Open Rows:", openRows);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="departments table">
        <TableHead>
          <TableRow>
            <TableCell>Department Name</TableCell>
            <TableCell>
              <NewDepartment newDepartmentSubmit={newDepartmentSubmit} />
            </TableCell>
            <TableCell>
              <NewDesignation
                departments={departments}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                DesignationHandleSubmit={DesignationHandleSubmit}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departments?.map((department: any) => (
            <React.Fragment key={department?._id}>
              <TableRow>
                <TableCell component="th" scope="row">
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => handleRowToggle(department._id)}
                  >
                    {isOpen(department._id) ? (
                      <h1>keydown</h1>
                    ) : (
                      // <KeyboardArrowUpIcon />
                      // <KeyboardArrowDownIcon />
                      <h1>keyup</h1>
                    )}
                  </IconButton>
                  {department?.Name}
                </TableCell>
                <TableCell>
                  <TextField
                    label="New Department Name"
                    variant="outlined"
                    fullWidth
                    value={newName[department._id] || ""}
                    onChange={(e) =>
                      handleNameChange(department._id, e.target.value)
                    }
                    error={Boolean(errors[department._id])}
                    helpertext={errors[department._id]}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={
                      <CircularProgress
                        size="1.5rem"
                        color="inherit"
                        disableShrink
                      />
                    }
                    onClick={() =>
                      renameDepartment(department._id, newName[department._id])
                    }
                  >
                    Rename
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteDepartment(department._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4}>
                  <Collapse
                    in={isOpen(department._id)}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Designation</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {designations
                          .filter(
                            (designation: any) =>
                              designation.departmentId === department._id
                          )
                          .map((designation: any) => (
                            <TableRow key={designation._id}>
                              <TableCell>{designation.Name}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
