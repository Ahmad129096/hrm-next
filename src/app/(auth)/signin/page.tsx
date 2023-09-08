"use client";
import { useState } from "react";
import { endPoints } from "../../../static";
import { SignInForm } from "./signInForm";
import { SignInInterface } from "../Interfaces";
import { useAppDispatch } from "@/hooks/useDispacter";
import { useAxios } from "@/hooks";
import { login } from "@/redux/slices/authSlice";
import { status } from "@/redux/slices/statusSlice";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { getPermissions } from "@/redux/slices/permissionsSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const { SIGNIN } = endPoints;
  const router = useRouter();
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const [isCheck, setIsCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const callbackUrl = searchParams?.get("callbackUrl") || "/";

  const initialValue: SignInInterface = {
    email_username: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    email: localStorage.getItem("email") || "",
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickSavePassword = (e: any) => setRememberMe(e.target.checked);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onSubmit = (values: SignInInterface) => {
    setIsCheck(true);
    callAxios({
      url: SIGNIN,
      method: "post",
      data: values,
    }).then(async (res: any) => {
      if (res) {
        console.log({ values });
        setIsCheck(false);
        const nextRes = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
          callbackUrl,
        });
        if (!nextRes?.error) {
          router.push(callbackUrl);
        }
        dispatch(login(res.token));
        dispatch(status(res.userStatus));
        dispatch(showSnackbar({ message: res.message }));
        dispatch(getPermissions(res.permissions[0].module));

        if (rememberMe) {
          localStorage.setItem("email", values.email_username);
          localStorage.setItem("password", values.password);
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }
      } else {
        setIsCheck(false);
      }
    });
  };

  return (
    <SignInForm
      showPassword={showPassword}
      handleClickSavePassword={handleClickSavePassword}
      isCheck={isCheck}
      initialValue={initialValue}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      onSubmit={onSubmit}
    />
  );
};

export default SignIn;
