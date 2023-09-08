import { useAxios } from "../../../Hooks";
import { endPoints, Labels, Content } from "../../../../static";
import { useEffect, useState } from "react";
import { initialValue } from "./initialValues";
import { CreateOrgForm } from "./form";
import { useAppDispatch } from "../../../../app/Hooks/useDispacter";
import { showSnackbar } from "../../../../store/slice/snackbarSlice";
import { login } from "../../../../store/slice/authSlice";
import { status } from "../../../../store/slice/statusSlice";
import { getOrganization } from "../../../../store/slice/createOrganization";
import { OrganizationInterface } from "../../Interfaces";

export const CreateOrganization = (props) => {
  const { correct_date } = Content;
  const { step } = props;
  const { IMG_MSG, CONFIRM_MSG } = Labels;
  const {
    ORGANIZATION_CATEGORIES,
    ORGANIZATION_LOGO,
    ORGANIZATION_CREATE,
    LOGO_DELETE,
    GET_COUNTRIES,
    GET_STATES,
    GET_CITIES,
  } = endPoints;
  const dispatch = useAppDispatch();
  const { callAxios } = useAxios();
  const [data, setData] = useState<any>([]);
  const [check, setCheck] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(false);

  const [img, setImg] = useState<any>();
  const [countries, setCountries] = useState<any | object>([]);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener("beforeunload", unload);
    orgCategory();

    return () => {
      window.removeEventListener("beforeunload", unload);
    };
    // eslint-disable-next-line
  }, []);
  const unload = () => {
    alert(CONFIRM_MSG);
    deleteImage();
  };
  function orgCategory() {
    console.log(initialValue.yearEstablished);
    callAxios({
      method: "get",
      url: ORGANIZATION_CATEGORIES,
    }).then((res: any) => {
      setData(res?.response);
    });
  }

  const handleSubmit = (
    values: OrganizationInterface,
    props: { resetForm: () => void }
  ) => {
    if (values.yearEstablished > initialValue.yearEstablished) {
      dispatch(showSnackbar({ message: correct_date, type: "warning" }));
    } else {
      setCheck(true);
      values.organizationAddress = `${values.zipCode},${values.city},${values.province},${values.country}`;
      values.logo = img?.Key;
      let statusValue = {
        createOrganization: true,
        selectDepartments: false,
      };
      callAxios({
        method: "post",
        data: values,
        url: ORGANIZATION_CREATE,
      }).then((res: any) => {
        if (res) {
          dispatch(getOrganization(res.data._id));
          dispatch(login(res.token));
          dispatch(status(statusValue));
          dispatch(showSnackbar({ message: res?.message }));
          setImg("");
          props.resetForm();
          step();
        } else {
          setCheck(false);
        }
      });
    }
  };
  const getCountries = () => {
    callAxios({
      method: "get",
      url: GET_COUNTRIES,
    }).then((res: any) => {
      setCountries(res?.data);
    });
  };
  const getStates = (value: any | undefined | null) => {
    if (states && cities) {
      setStates([]);
      setCities([]);
    }
    if (value) {
      callAxios({
        method: "get",
        url: `${GET_STATES}/${value._id}`,
      }).then((res: any) => {
        setStates(res?.data);
      });
    }
  };

  const getCities = (value: any | undefined | null) => {
    if (value) {
      callAxios({
        method: "get",
        url: `${GET_CITIES}/${value._id}`,
      }).then((res: any) => {
        setCities(res?.data);
      });
    }
  };

  const uploadImage = (event: any) => {
    setIsLoading(true);
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
      setIsLoading(false);
    });
  };
  const deleteImage = () => {
    setCheck(true);
    console.log("checking function ");
    callAxios({
      method: "post",
      url: LOGO_DELETE,
      data: img.Key,
      isJsonType: false,
    }).then((res: any) => {
      if (res) {
        setCheck(true);
        setImg("");
      }
    });
  };

  return (
    <CreateOrgForm
      deleteImage={deleteImage}
      uploadImage={uploadImage}
      handleSubmit={handleSubmit}
      initialValue={initialValue}
      data={data}
      check={check}
      img={img}
      countries={countries}
      states={states}
      getCountries={getCountries}
      getStates={getStates}
      getCities={getCities}
      cities={cities}
      isLoading={isLoading}
    />
  );
};
