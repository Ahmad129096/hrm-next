import { useState } from "react";
import { DepData } from "../../Interfaces";
import { NewDepartmentForm } from "./newdepartmentForm";
import { departmentInterFace } from "../../Interfaces";

export const NewDepartment = ({ newDepartmentSubmit }: DepData) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const initialValue: departmentInterFace = {
    departmentName: "",
  };
  return (
    <NewDepartmentForm
      open={open}
      handleClose={handleClose}
      initialValue={initialValue}
      handleClickOpen={handleClickOpen}
      newDepartmentSubmit={newDepartmentSubmit}
    />
  );
};
