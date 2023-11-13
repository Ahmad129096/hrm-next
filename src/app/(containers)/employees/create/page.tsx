"use client";
import { useAppDispatch, useAxios } from "@/hooks";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { endPoints } from "@/static";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EmployeeForm } from "../employeeForm";

const {
  LOGO_DELETE,
  ADD_EMPLOYEES,
  UPDATE_EMPLOYEE,
  ORGANIZATION_LOGO,
  SELECT_DEPARTMENTS,
  EMPLOYEES,
} = endPoints;

const Addemployees = () => {
  const router = useRouter();
  const params = useParams();
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const [img, setImg] = useState<any>();
  const [loader, setLoader] = useState(true);
  const [departments, setDepartments] = useState<any>([]);
  const [designations, setDesignations] = useState<any>([]);
  const [initialValue, setInitialValue] = useState<any>({
    name: "",
    email: "",
    joiningdate: "",
    departmentName: "",
    designationName: "",
    salary: 0,
    address: "",
    gender: "",
    logo: "",
    filen: "",
    education: [],
    experience: [],
    phoneNumber: "",
    optionalNumber: "",
    cnicNo: "",
    pic: "",
  });
  const getDepartment = () => {
    callAxios({
      url: `${SELECT_DEPARTMENTS}`,
    }).then((res: any) => {
      setDepartments(res?.Department);
      setDesignations(res?.designation);
    });
  };

  useEffect(() => {
    getDepartment();
  }, []);

  const addEmployeeHandlesubmit = (values: any) => {
    values.image = img?.Key;
    values.pic = img;

    callAxios({
      method: "post",
      data: values,
      url: `${ADD_EMPLOYEES}`,
    }).then((res: any) => {
      if (res.isError === true) {
        dispatch(showSnackbar({ message: res?.message }));
      } else {
        dispatch(showSnackbar({ message: res?.message }));
        router.push("/viewEmployee");
      }
    });
  };

  const EditEmployeeHandle = (values: any) => {
    values.pic = img;

    callAxios({
      method: "put",
      data: values,
      url: `${UPDATE_EMPLOYEE}/${params?.id}`,
    }).then((res) => {
      if (res) {
        dispatch(showSnackbar({ message: res.message }));
        router.push("/viewEmployee");
      }
    });
  };

  const uploadImage = (event: any, setLoad: any) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    callAxios({
      method: "post",
      data: formData,
      isJsonType: false,
      url: ORGANIZATION_LOGO,
    }).then((res: any) => {
      if (res) {
        setImg(res.data.Location);
        setLoad(false);
        dispatch(showSnackbar({ message: "Uploaded Successfully" }));
      }
    });
  };
  const deleteImage = () => {
    callAxios({
      data: img.Key,
      method: "post",
      url: LOGO_DELETE,
      isJsonType: false,
    }).then((res: any) => {
      if (res) {
        setImg("");
      }
    });
  };

  useEffect(() => {
    if (params?.id) {
      callAxios({
        method: "get",
        url: `${EMPLOYEES}/${params?.id}`,
      }).then((res: any) => {
        console.log("1111111", res);
        const profileData = res.profileData;
        const employeeData = res.employeeData;

        setInitialValue({
          ...initialValue,
          pic: profileData.pic,
          cnicNo: profileData.cnic,
          gender: profileData.gender,
          salary: employeeData.salary,
          address: profileData.address,
          name: profileData.userId.Name,
          email: profileData.userId.email,
          education: profileData.education,
          experience: profileData.experience,
          joiningdate: employeeData.joiningdate,
          phoneNumber: profileData.phoneNoprimary,
          departmentName: employeeData.departmentId[0],
          optionalNumber: profileData.phoneNosecondary,
          designationName: employeeData.designationId[0],
        });
        setLoader(false);
        setImg(profileData.pic);
      });
    }
  }, []);

  return (
    <>
      <EmployeeForm
        img={img}
        loader={loader}
        setLoader={setLoader}
        uploadImage={uploadImage}
        deleteImage={deleteImage}
        departments={departments}
        initialValue={initialValue}
        designations={designations}
        addEmployeeHandlesubmit={
          params?.id ? EditEmployeeHandle : addEmployeeHandlesubmit
        }
      />
    </>
  );
};

export default Addemployees;
