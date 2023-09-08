import { Labels } from "../../../static";
import { endPoints } from "../../../static";
import { useAxios } from "../../../app/Hooks";
import { initialValue } from "./interface";
import { useEffect, useState } from "react";
import { showSnackbar } from "../../../store/slice/snackbarSlice";
import { useAppDispatch } from "../../../app/Hooks/useDispacter";
import { useNavigate } from "react-router-dom";
import { JobForm } from "./jobForm";

const {
  JOB_SEARCH_TAG,
  ORGANIZATION_LOGO,
  LOGO_DELETE,
  GET_EMPLOYEE,
  GET_DEPARTMENT,
  CREATE_JOB,
} = endPoints;
const { IMG_MSG } = Labels;
export const CreateJob = () => {
  const navigate = useNavigate();
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
      navigate("/viewjob");
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
