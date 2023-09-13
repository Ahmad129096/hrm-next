"use client";
import { useEffect, useState } from "react";
import { endPoints, routeNames } from "../../../../static";
import { DepartmentForm } from "./departmentForm";
import { useAppDispatch, useAxios } from "@/hooks";
import { useRouter } from "next/navigation";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { status } from "@/redux/slices/statusSlice";

const { START } = routeNames;
const {
  GET_DEPARTMENTS,
  CREATE_DEPARTMENT,
  CREATE_DESIGNATION,
  CONFIRM_DEPARTMENTS_DESIGNATIONS,
} = endPoints;

export const OrgDepartment = () => {
  const router = useRouter();
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>([]);
  const [bool, setBool] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string[]>([]);
  const [selectedDesignation, setSelectedDesignation] = useState<string[]>([]);

  const handleDepartmentCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    departmentId: string
  ) => {
    const checked = event.target.checked;
    if (checked) {
      setSelectedDepartment((prevSelected) => [...prevSelected, departmentId]);
      setSelectedDesignation((prevSelectedDesignations) => [
        ...prevSelectedDesignations,
        ...data
          .find((value: any) => value.department._id === departmentId)
          ?.designation.map((designation: any) => designation._id),
      ]);
    } else {
      setSelectedDepartment((prevSelected) =>
        prevSelected.filter((selected) => selected !== departmentId)
      );
      setSelectedDesignation((prevSelectedDesignations) =>
        prevSelectedDesignations.filter(
          (selected) =>
            !data
              .find((value: any) => value.department._id === departmentId)
              ?.designation.find((d: any) => d._id === selected)
        )
      );
    }
  };

  const handleDesignationCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    designationId: string
  ) => {
    const checked = event.target.checked;
    if (checked) {
      setSelectedDesignation((prevSelected) => [
        ...prevSelected,
        designationId,
      ]);
    } else {
      setSelectedDesignation((prevSelected) =>
        prevSelected.filter((selected) => selected !== designationId)
      );
    }
  };

  useEffect(() => {
    getDepartment();
    // eslint-disable-next-line
  }, [bool]);
  const getDepartment = () => {
    callAxios({
      url: `${GET_DEPARTMENTS}`,
      method: "get",
    }).then((res: any) => {
      setData(res?.data);
    });
  };
  const newDepartmentSubmit = (values: any) => {
    callAxios({
      method: "post",
      url: `${CREATE_DEPARTMENT}`,
      data: values,
    }).then((res: any) => {
      setBool(true);
      getDepartment();
      dispatch(showSnackbar({ message: res?.message }));
    });
  };
  const DesignationHandleSubmit = (values: any) => {
    const value = {
      designationName: values.designationName,
      departmentId: values.departmentName,
      name: values.rolename,
      module: values.module,
    };
    callAxios({
      method: "post",
      url: `${CREATE_DESIGNATION}`,
      data: value,
    }).then((res: any) => {
      dispatch(showSnackbar({ message: res.message }));
      setBool(true);
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    console.log("selectedddepartment", selectedDepartment);
    console.log("selectedddesignation", selectedDesignation);
    if (selectedDepartment.length === 0) {
      dispatch(
        showSnackbar({
          message: "Select Atleast One Department & Designation",
          type: "warning",
        })
      );
    } else {
      let value = {
        Selecteddepartment: selectedDepartment,
        designations: selectedDesignation,
      };
      let statusValue = {
        createOrganization: true,
        selectDepartments: true,
      };
      callAxios({
        url: `${CONFIRM_DEPARTMENTS_DESIGNATIONS}`,
        method: "post",
        data: value,
      }).then((res: any) => {
        router.push(START);
        dispatch(showSnackbar({ message: res.message }));
        dispatch(status(statusValue));
      });
    }
  };

  return (
    <DepartmentForm
      data={data}
      open={open}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      handleClickOpen={handleClickOpen}
      selectedDepartment={selectedDepartment}
      selectedDesignation={selectedDesignation}
      newDepartmentSubmit={newDepartmentSubmit}
      DesignationHandleSubmit={DesignationHandleSubmit}
      handleDepartmentCheckboxChange={handleDepartmentCheckboxChange}
      handleDesignationCheckboxChange={handleDesignationCheckboxChange}
    />
  );
};
