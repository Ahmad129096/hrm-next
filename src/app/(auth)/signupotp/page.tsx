"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAxios } from "@/hooks";
import { SignUpOtpForm } from "./signUpOtpForm";
import { SignUpOtpInterface } from "../Interfaces";
import { useRouter, useParams } from "next/navigation";
import { endPoints, routeNames } from "../../../static";
import { showSnackbar } from "@/redux/slices/snackbarSlice";

const SignUpOtp = () => {
  const router = useRouter();
  const params = useParams();
  const { SIGNIN } = routeNames;
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const [isCheck, setIsCheck] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const { EMAIL_VERIFY, FORGET_PASSWORD } = endPoints;

  const [counter, setCounter] = useState({
    seconds: 60,
  });

  const initialValue: SignUpOtpInterface = {
    email: params?.email,
    otp: "",
  };
  useEffect(() => {
    counterReset();
    // eslint-disable-next-line
  }, [counter]);
  const counterReset = () => {
    counter.seconds > 0 &&
      setTimeout(() => {
        setIsDisable(true);
        setCounter({
          seconds: counter.seconds - 1,
        });
      }, 1000);
    if (counter.seconds === 0) {
      setIsDisable(false);
    }
  };
  const resendOtp = () => {
    setCounter({ seconds: 60 });
    counterReset();
    callAxios({
      url: FORGET_PASSWORD,
      method: "post",
      data: { email: params?.email },
    }).then((res: any) => {
      if (res) {
        dispatch(showSnackbar({ message: res.message }));
      }
    });
  };

  const handleSubmit = (values: SignUpOtpInterface) => {
    setIsCheck(true);
    callAxios({
      method: "post",
      data: values,
      url: EMAIL_VERIFY,
    }).then((res: any) => {
      if (res) {
        dispatch(showSnackbar({ message: res.message }));
        router.push(SIGNIN);
      } else {
        setIsCheck(false);
      }
    });
  };

  return (
    <SignUpOtpForm
      counter={counter}
      isCheck={isCheck}
      resendOtp={resendOtp}
      isDisable={isDisable}
      handleSubmit={handleSubmit}
      initialValue={initialValue}
    />
  );
};

export default SignUpOtp;
