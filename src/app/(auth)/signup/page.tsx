"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAxios } from "@/hooks";
import { SignUpForm } from "./signUpForm";
import { useRouter } from "next/navigation";
import { SignUpInterface } from "../Interfaces";
import { SignUpValidation } from "../Validation";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { routeNames, Content, endPoints } from "../../../static";

const { OTPVERIFY, SIGNIN } = routeNames;
const { SIGNUP } = endPoints;
const { signInlink } = Content;

const SignUpComponent = () => {
  const router = useRouter();
  const { callAxios } = useAxios();
  const dispatch = useAppDispatch();
  const [isCheck, setIsCheck] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showReplayIcon, setShowReplayIcon] = useState(true);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  useEffect(() => {
    if (suggestions.length > 0) {
      setIsLoading(false);
    }
  }, [suggestions]);

  const handleInputChange = async (event: any) => {
    const value = event.target.value;
    if (value.length > 20) {
      event.target.value = value.slice(0, 20);
      return;
    }
    setInputValue(value);
    setSelectedSuggestion("");

    if (
      value.length >= 3 &&
      //@ts-ignore
      (await SignUpValidation.fields.name.validate(value))
    ) {
      const suggestions = await fetchSuggestions(value);
      setSuggestions(suggestions);
      setShowReplayIcon(false);
    } else {
      setSuggestions([]);
      setShowReplayIcon(true);
    }
  };
  const handleSuggestionClick = (suggestion: any) => {
    setShowReplayIcon(false);
    setInputValue(suggestion);
    setSelectedSuggestion(suggestion);
    setSuggestions([]);
    console.log(suggestion);
  };
  const refreshbutton = async (inputValue: any) => {
    const response = await axios.post(
      `http://localhost:5000/api/usersuggestion`,
      { inputValue }
    );
    const suggestions = await response.data;
    setSuggestions(suggestions);
  };
  const fetchSuggestions = async (inputValue: any) => {
    const response = await axios.post(
      `http://localhost:5000/api/usersuggestion`,
      { inputValue }
    );
    const suggestions = await response.data;
    return suggestions;
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowconfirmPassword((confirmshow) => !confirmshow);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const initialValue: SignUpInterface = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "organizationcreation",
    check: false,
  };

  const handleSubmit = (values: any) => {
    if (selectedSuggestion) {
      values.name = selectedSuggestion;
    }

    setIsCheck(true);
    callAxios({
      method: "post",
      data: values,
      url: SIGNUP,
    }).then((res: any) => {
      if (res) {
        dispatch(showSnackbar({ message: res.message }));
        router.push(`${OTPVERIFY}/${values.email}`);
      } else {
        setIsCheck(false);
      }
    });
  };

  const handleChange = (e: any) => {
    e.preventDefault();
  };

  return (
    <SignUpForm
      SIGNIN={SIGNIN}
      isCheck={isCheck}
      signInlink={signInlink}
      handleSubmit={handleSubmit}
      inputValue={inputValue}
      suggestions={suggestions}
      handleInputChange={handleInputChange}
      handleSuggestionClick={handleSuggestionClick}
      handleChange={handleChange}
      isLoading={isLoading}
      showReplayIcon={showReplayIcon}
      setShowReplayIcon={setShowReplayIcon}
      setIsLoading={setIsLoading}
      refreshbutton={refreshbutton}
      initialValue={initialValue}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleClickShowConfirmPassword={handleClickShowConfirmPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      showconfirmPassword={showconfirmPassword}
    />
  );
};

export default SignUpComponent;
