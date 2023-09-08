"use client";
import { useEffect, useState } from "react";
import { ResetOtpForm } from "./resetOtpForm";
import { endPoints, routeNames } from "../../../static";
import { resetOtpInterface } from "../Interfaces";
import { useAppDispatch, useAxios } from "@/hooks";
import { useParams } from "next/navigation";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { useRouter } from "next/navigation";

const ResetOtp = () => {
  const params = useParams();
  const router = useRouter();
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const { RESETPASSWORD } = routeNames;
  const [isCheck, setIsCheck] = useState(false);
  const { OTP_VERIFY, FORGET_PASSWORD } = endPoints;
  const [isDisable, setIsDisable] = useState(false);

  const [time, setTime] = useState({
    seconds: 60,
  });

  useEffect(() => {
    counterReset();
    // eslint-disable-next-line
  }, [time]);
  const counterReset = () => {
    time.seconds > 0 &&
      setTimeout(() => {
        setIsDisable(true);
        setTime({
          seconds: time.seconds - 1,
        });
      }, 1000);
    if (time.seconds === 0) {
      setIsDisable(false);
    }
  };

  const initialValue: resetOtpInterface = {
    email: params?.email,
    otp: "",
  };

  const resendOtp = () => {
    setTime({ seconds: 60 });
    counterReset();
    callAxios({
      url: FORGET_PASSWORD,
      method: "post",
      data: { email: params?.email },
    }).then((res) => {
      if (res) {
        dispatch(showSnackbar({ message: res.message }));
      }
    });
  };
  const handleSubmit = (values: resetOtpInterface) => {
    setIsCheck(true);

    callAxios({
      method: "post",
      data: values,
      url: OTP_VERIFY,
    }).then((res: any) => {
      if (res) {
        dispatch(showSnackbar({ message: res.message }));
        router.push(`${RESETPASSWORD}/${values.email}`);
      } else {
        setIsCheck(false);
      }
    });
  };

  return (
    <ResetOtpForm
      initialValue={initialValue}
      handleSubmit={handleSubmit}
      resendOtp={resendOtp}
      isDisable={isDisable}
      isCheck={isCheck}
      time={time}
    />
  );
};

export default ResetOtp;
