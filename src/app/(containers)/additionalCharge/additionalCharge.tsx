import { useEffect, useState } from "react";
import { useAxios } from "@/hooks";
import { endPoints } from "../../../static";
import { AdditionalChargeForm } from "./form";
import { permissionObject } from "./permissionData";
import { AdditionalChargeInteface } from "../Interfaces";

export const AdditionalCharge = () => {
  const { callAxios } = useAxios();

  const { GET_EMPLOYEE, GET_PERMISSION } = endPoints;
  const [employee, setEmployee] = useState<any>();
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [permission, setPermission] = useState<any>();

  const [initialValue, setInitialValue] = useState<AdditionalChargeInteface>({
    employeeId: "",
    permissionType: "",
    permission: [],
  });
  useEffect(() => {
    callAxios({
      method: "get",
      url: GET_EMPLOYEE,
    }).then((res: any) => {
      if (res) {
        setEmployee(res.data);
      } else {
        setEmployee("");
      }
    });
    setInitialValue({ ...initialValue, permission: permissionObject });
    // eslint-disable-next-line
  }, []);

  const employeePermission = (value) => {
    callAxios({
      method: "get",
      url: `${GET_PERMISSION}/${value.roleid}`,
    }).then((res: any) => {
      setPermission(res?.data[0]?.module);
    });
  };
  const handleSubmit = (values) => {
    setIsCheck(true);
    setTimeout(() => {
      console.log("Final Values", values);
      setIsCheck(false);
    }, 2000);
  };
  return (
    <AdditionalChargeForm
      initialValue={initialValue}
      employeePermission={employeePermission}
      handleSubmit={handleSubmit}
      isCheck={isCheck}
      permission={permission}
      employee={employee}
      permissionObject={permissionObject}
    />
  );
};
