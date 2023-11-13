"use client";
import { Labels, endPoints } from "@/static";
import { useEffect, useState } from "react";
import { EditJobForm } from "../editJobForm";
import { initialValue } from "../../interface";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { useAppDispatch, useAxios } from "@/hooks";
import { useRouter } from "next/navigation";

const {
  JOB_SEARCH_TAG,
  ORGANIZATION_LOGO,
  LOGO_DELETE,
  GET_EMPLOYEE,
  GET_DEPARTMENTS,
  CREATE_JOB,
  // GET_DESIGNATION,
} = endPoints;
const { IMG_MSG } = Labels;

const EditJob = () => {
  const router = useRouter();
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const [img, setImg] = useState<any>();
  const [names, setNames] = useState([]);
  const [check, setCheck] = useState(false);
  const [employee, setEmployee] = useState<any>();
  const [department, setDepartment] = useState<any>([]);
  const [designation, setDesignation] = useState<any>([]);

  useEffect(() => {
    const TagResponse = callAxios({
      url: JOB_SEARCH_TAG,
    });
    const EmployeeResponse = callAxios({
      url: GET_EMPLOYEE,
    });
    const DepartmentResponse = callAxios({
      url: GET_DEPARTMENTS,
    });
    // const DesignationResponse = callAxios({
    //   url: GET_DESIGNATION,
    // });
    Promise.all([
      DepartmentResponse,
      EmployeeResponse,
      TagResponse,
      // DesignationResponse,
    ]).then((res: any) => {
      if (res) {
        console.log(res, "res");
        setDepartment(res[0].data);
        setEmployee(res[1].data);
        setNames(res[2].data);
        // setDesignation(res[3].data);
      } else {
        dispatch(showSnackbar({ message: res.message }));
      }
    }); // eslint-disable-next-line
  }, []);

  const uploadImage = (event: any) => {
    setCheck(true);
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    callAxios({
      method: "post",
      url: ORGANIZATION_LOGO,
      data: formData,
      isJsonType: false,
    }).then((res: any) => {
      if (res) {
        setCheck(false);
        setImg(res.data);
        initialValue.logo = res.data.Key;
        dispatch(showSnackbar({ message: IMG_MSG }));
      }
    });
  };
  const deleteImage = () => {
    callAxios({
      method: "post",
      url: LOGO_DELETE,
      data: img.Key,
      isJsonType: false,
    }).then((res: any) => {
      if (res) {
        setImg("");
      }
    });
  };
  const handleSubmit = (value: any) => {
    console.log(value, "values");
    callAxios({
      method: "post",
      url: CREATE_JOB,
      data: value,
    }).then((res: any) => {
      dispatch(showSnackbar({ message: res.message }));
      router.push("/viewjob");
    });
  };
  const getDesignation = (value: any) => {
    console.log(" values", value);
    callAxios({
      method: "get",
      url: `api/getSpeceficDesignation/${value._id}`,
    }).then((res: any) => {
      console.log("ressssssssss", res);
      setDesignation(res.data);
    });
  };
  return (
    <EditJobForm
      img={img}
      names={names}
      check={check}
      employees={employee}
      deleteImage={deleteImage}
      uploadImage={uploadImage}
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      department={department}
      designation={designation}
      getDesignation={getDesignation}
    />
  );
};

export default EditJob;
