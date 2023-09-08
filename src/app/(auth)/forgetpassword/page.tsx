"use client";
import { useState } from "react";
import { useAppDispatch, useAxios } from "@/hooks";
import { useRouter } from "next/navigation";
import { endPoints } from "../../../static";
import { forgotPasswordInterface } from "../Interfaces";
import { ForgetPasswordForm } from "./forgetPasswordForm";
import { showSnackbar } from "@/redux/slices/snackbarSlice";

const ForgetPassword = () => {
  const initialValues: forgotPasswordInterface = {
    email: "",
  };
  const router = useRouter();
  const { callAxios } = useAxios();
  const [isCheck, setIsCheck] = useState(false);
  const { FORGET_PASSWORD } = endPoints;
  const dispatch = useAppDispatch();

  const handleSubmit = (values: any, props: { resetForm: () => void }) => {
    setIsCheck(true);
    callAxios({
      url: FORGET_PASSWORD,
      method: "post",
      data: values,
    }).then((res: any) => {
      if (res) {
        dispatch(showSnackbar({ message: res.message }));
        props.resetForm();
        router.push(`/passwordotp/${values.email}`);
      } else {
        setIsCheck(false);
      }
    });
  };
  return (
    <div>
      <ForgetPasswordForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        isCheck={isCheck}
      />
    </div>
  );
};

export default ForgetPassword;
