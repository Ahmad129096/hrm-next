"use client";
import { routeNames, endPoints } from "../../../static";
import { useState } from "react";
import { resetPassword } from "../Interfaces";
import { ResetForm } from "./resetForm";
import { useAxios, useAppDispatch } from "@/hooks";
import { useParams, useRouter } from "next/navigation";
import { showSnackbar } from "@/redux/slices/snackbarSlice";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);

  const { SIGNIN } = routeNames;
  const params = useParams();
  const router = useRouter();
  const { FORGET_VERIFY } = endPoints;
  const { callAxios } = useAxios();
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useAppDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((confirmshow) => !confirmshow);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const initialValue: resetPassword = {
    email: params?.email,
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (
    values: resetPassword,
    props: { resetForm: () => void }
  ) => {
    setIsCheck(true);
    callAxios({
      method: "put",
      data: values,
      url: FORGET_VERIFY,
    }).then((res: any) => {
      if (res) {
        dispatch(showSnackbar({ message: res.message }));
        props.resetForm();
        router.push(SIGNIN);
      }
    });
  };

  return (
    <ResetForm
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      handleMouseDownPassword={handleMouseDownPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleClickShowConfirmPassword={handleClickShowConfirmPassword}
      handleMouseDownConfirmPassword={handleMouseDownConfirmPassword}
      isCheck={isCheck}
      showPassword={showPassword}
      showconfirmPassword={showconfirmPassword}
    />
  );
};

export default ResetPassword;
