"use client";
import { useEffect, useState } from "react";
import { JobForm } from "./jobForm";
import { Labels, endPoints } from "@/static";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAxios } from "@/hooks";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { initialValue } from "../interface";

const {
  LOGO_DELETE,
  CREATE_JOB,
  GET_EMPLOYEE,
  JOB_SEARCH_TAG,
  GET_DEPARTMENT,
  ORGANIZATION_LOGO,
} = endPoints;
const { IMG_MSG } = Labels;

const CreateJob = () => {
  const router = useRouter();
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const [img, setImg] = useState<any>();
  const [names, setNames] = useState([]);
  const [employee, setEmployee] = useState<any>();
  const [department, setDepartment] = useState<any>("");
  const [designation, setDesignation] = useState<any>();

  useEffect(() => {
    const TagResponse = callAxios({
      url: JOB_SEARCH_TAG,
    });
    const EmployeeResponse = callAxios({
      url: GET_EMPLOYEE,
    });
    const DepartmentResponse = callAxios({
      url: GET_DEPARTMENT,
    });

    Promise.all([DepartmentResponse, EmployeeResponse, TagResponse]).then(
      (res: any) => {
        if (res) {
          setDepartment(res[0].data);
          setEmployee(res[1].data);
          setNames(res[2].data);
        } else {
          dispatch(showSnackbar({ message: res.message }));
        }
      }
    ); // eslint-disable-next-line
  }, []);

  const uploadImage = (event: any) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    callAxios({
      method: "post",
      url: ORGANIZATION_LOGO,
      data: formData,
      isJsonType: false,
    }).then((res: any) => {
      if (res) {
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
    callAxios({
      method: "get",
      url: `api/getSpeceficDesignation/${value._id}`,
    }).then((res: any) => {
      setDesignation(res.data);
    });
  };
  return (
    <JobForm
      img={img}
      names={names}
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

export default CreateJob;
