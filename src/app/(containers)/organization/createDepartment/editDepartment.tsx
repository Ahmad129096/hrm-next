"use client";
import { endPoints } from "../../../../static";
import { useEffect, useState } from "react";
import { EditDepartmentForm } from "./editDepartmentform";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { useAxios, useAppDispatch } from "@/hooks";

const { CREATE_DEPARTMENT, CREATE_DESIGNATION, SELECT_DEPARTMENTS } = endPoints;

export const EditDepartment = () => {
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const [bool, setBool] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [departments, setDepartments] = useState<any>([]);
  const [designations, setDesignations] = useState<any>([]);
  const [newName, setNewName] = useState<{ [key: string]: string }>({});
  const [initialValue, setInitialValue] = useState<any>({
    department: [],
    designation: [],
  });

  const handleNameChange = (id: string, value: string) => {
    const newErrors = { ...errors } as any;
    const regex = /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/;
    if (!regex.test(value)) {
      newErrors[id] = "Invalid name";
    } else if (value.length < 3) {
      newErrors[id] = "Name should be at least 3 characters long";
    } else if (value.length > 30) {
      newErrors[id] = "Name should not exceed 30 characters";
    } else {
      delete newErrors[id];
    }
    setNewName((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setErrors(newErrors);
  };
  useEffect(() => {
    getDepartment();
    // eslint-disable-next-line
  }, [bool]);
  const getDepartment = () => {
    callAxios({
      url: `${SELECT_DEPARTMENTS}`,
      method: "get",
    }).then((res: any) => {
      setDepartments(res?.Department);
      setDesignations(res?.designation);
    });
  };
  const getValues = (): void => {
    let departmentArray = departments?.map((x: any) => {
      return x._id;
    });
    let desigantionArray = designations?.map((x: any) => {
      return x._id;
    });
    setInitialValue({
      ...initialValue,
      department: departmentArray,
      designation: desigantionArray,
    });
  };
  useEffect(() => {
    getValues();
    // eslint-disable-next-line
  }, [departments, designations]);
  const newDepartmentSubmit = (values: any) => {
    callAxios({
      method: "post",
      url: `${CREATE_DEPARTMENT}`,
      data: values,
    }).then((res: any) => {
      getDepartment();
      dispatch(showSnackbar({ message: res?.message }));
      setBool(true);
    });
  };
  const deleteDepartment = (departmentId: string) => {
    callAxios({
      method: "delete",
      url: `${"DELETE_DEPARTMENT"}/${departmentId}`,
    }).then((res: any) => {
      getDepartment();
      dispatch(showSnackbar({ message: res?.message }));
      setBool(true);
    });
  };
  const renameDepartment = (departmentId: string, newName: string) => {
    callAxios({
      method: "patch",
      url: `${"RENAME_DEPARTMENT"}`,
      data: {
        departmentId,
        newName: newName,
      },
    }).then((res: any) => {
      getDepartment();
      dispatch(showSnackbar({ message: res?.message }));
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const DesignationHandleSubmit = (values: any) => {
    const value = {
      designationName: values.designationName,
      departmentId: values.departmentName,
    };
    callAxios({
      method: "post",
      url: `${CREATE_DESIGNATION}`,
      data: value,
    }).then((res: any) => {
      dispatch(showSnackbar({ message: res?.message }));
      getDepartment();
      setBool(true);
    });
  };

  return (
    <EditDepartmentForm
      designations={designations}
      handleClickOpen={handleClickOpen}
      open={open}
      DesignationHandleSubmit={DesignationHandleSubmit}
      handleClose={handleClose}
      departments={departments}
      handleNameChange={handleNameChange}
      errors={errors}
      newName={newName}
      setNewName={setNewName}
      renameDepartment={renameDepartment}
      initialValue={initialValue}
      deleteDepartment={deleteDepartment}
      newDepartmentSubmit={newDepartmentSubmit}
    />
  );
};
