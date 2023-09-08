"use client";
import { useEffect, useState } from "react";
import { IconButton, Chip } from "@mui/material";
import {
  Icons,
  TableX,
  PageHeader,
  ConfirmDailog,
  ProgressLoader,
} from "@/shared";
import { useAxios } from "@/hooks";
import { useRouter } from "next/navigation";
import { Content, endPoints, routeNames } from "@/static";
import { Capitalize } from "@/utils";

const { ADD_EMPLOYEES } = routeNames;
const { VIEW_EMPLOYEES, DELETE_EMPLOYEE } = endPoints;

const ViewEmployees = () => {
  const router = useRouter();
  const { callAxios } = useAxios();
  const [deleteId, setdeleteId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDelete, setIsDelete] = useState<any>([]);
  const [employeeData, setemployeeData] = useState<any>([]);

  const columns = [
    { id: "image", label: "Image" },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone No" },
    { id: "status", label: "Status" },
    { id: "action", label: "Actions" },
  ];

  useEffect(() => {
    setLoading(true);
    callAxios({
      method: "get",
      url: `${VIEW_EMPLOYEES}`,
    }).then((res: any) => {
      setemployeeData(res.data);
      setLoading(false);
    });

    // eslint-disable-next-line
  }, [isDelete]);

  const handleconfirm = (id: any) => {
    setdeleteId(id);
    setIsOpen(true);
  };
  const deleteEmployee = () => {
    setIsOpen(false);
    callAxios({
      method: "delete",
      url: `${DELETE_EMPLOYEE}/${deleteId}`,
    }).then((res: any) => {
      setIsDelete(res);
    });
  };
  const TableData = employeeData?.map((value: any) => {
    return {
      id: value._id,
      image: (
        <img
          src={value.pic ? value.pic : Content.employee_image}
          alt={Content.employee_image}
          style={{ width: "30px", height: "30px" }}
        />
      ),
      name: value?.userId.Name,
      email: value.userId.email,
      phone: (
        <>
          {value?.phoneNoprimary}
          <br />
          {value?.phoneNosecondary}
        </>
      ),
      status: (
        <Chip
          size="small"
          color={
            value?.userId.status === "active"
              ? "success"
              : value?.userId.status === "pending"
              ? "primary"
              : "error"
          }
          style={{ padding: "5px" }}
          label={Capitalize(value?.userId.status)}
        />
      ),
      action: (
        <>
          <IconButton
            aria-label="delete"
            sx={{ color: "#5663ed" }}
            onClick={() => {
              router.push(`${ADD_EMPLOYEES}/${value?._id}`);
            }}
          >
            <Icons.BiEdit />
          </IconButton>
          <IconButton
            aria-label="delete"
            sx={{ color: "red" }}
            onClick={() => {
              handleconfirm(value.userId._id);
            }}
          >
            <Icons.MdDeleteOutline />
          </IconButton>
        </>
      ),
    };
  });

  return (
    <>
      {loading ? (
        <ProgressLoader />
      ) : (
        <>
          <PageHeader
            btnText={"Add New Employee"}
            header={"EMPLOYEES"}
            navigate={"/addemployees"}
          />
          <TableX headingTitle={columns} TableData={TableData} />
        </>
      )}
      <ConfirmDailog
        open={isOpen}
        setOpen={setIsOpen}
        handleConfirm={deleteEmployee}
      />
    </>
  );
};

export default ViewEmployees;
