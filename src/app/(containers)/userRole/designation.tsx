import { useAxios } from "../../../app/Hooks";
import { endPoints } from "../../../static";
import { useEffect, useState } from "react";
import { DesignationHeading } from "./DesignationForm";
export function DepartmentTable() {
  const { callAxios } = useAxios();
  const [designation, setDesignation] = useState<any>([]);
  const { GET_DESIGNATION } = endPoints;

  const [initialValues, setInitialValues] = useState({
    designation: [],
  });

  useEffect(() => {
    callAxios({
      url: GET_DESIGNATION,
      method: "get",
    }).then((res: any) => {
      if (res) {
        setDesignation(res.data);
        setInitialValues({ designation: res.data });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DesignationHeading
        designation={designation}
        initialValues={initialValues}
      />
    </div>
  );
}
