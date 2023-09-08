export interface forgotPasswordInterface {
  email: string;
}
/** @format */

export interface SignUpInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  type: string;
  check: boolean;
}

export interface SignUpProps {
  initialValue: SignUpInterface;
  handleSubmit: (value: SignUpInterface) => void;
  inputValue: any;
  isLoading: any;
  setIsLoading: any;
  showReplayIcon: any;
  setShowReplayIcon: any;
  suggestions: any;
  handleInputChange: (event: Event) => void;
  handleChange: (event: Event) => void;
  handleSuggestionClick: (suggestion: any) => void;
  refreshbutton: (inputValue: any) => void;
  handleClickShowPassword: () => void;
  handleClickShowConfirmPassword: () => void;
  handleMouseDownPassword: (event: any) => void;
  showPassword: boolean;
  showconfirmPassword: boolean;
  isCheck: boolean;
  SIGNIN: string;
  signInlink: string;
}
export interface resetOtpInterface {
  email: any;
  otp: string;
}

export interface resetOtpProps {
  initialValue: resetOtpInterface;
  handleSubmit: (value: resetOtpInterface) => void;
  resendOtp: () => void;
  isDisable: boolean;
  isCheck: boolean;
  time: any;
}

export interface SignInInterface {
  email_username: string;
  password: string;
  email: string;
}
export interface SignInProps {
  showPassword: boolean;
  isCheck: boolean;
  initialValue: SignInInterface;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: any) => void;
  handleClickSavePassword: (event: any) => void;
  onSubmit: (value: SignInInterface) => void;
}
export interface SignUpOtpInterface {
  email: any;
  otp: string;
}
export interface SignUpOtpProps {
  isDisable: boolean;
  isCheck: boolean;
  initialValue: SignUpOtpInterface;
  resendOtp: (event: any) => void;
  handleSubmit: (value: SignUpOtpInterface) => void;
  counter: any;
}

export interface forgotPasswordProps {
  initialValues: forgotPasswordInterface;
  isCheck: boolean;
  handleSubmit: (values: forgotPasswordInterface, props: any) => void;
}

export interface resetPassword {
  email: any;
  password: string;
  confirmPassword: string;
}

export interface resetForm {
  initialValue: resetPassword;
  handleSubmit: (values: resetPassword, props: any) => void;
  handleMouseDownPassword: (e: any) => void;
  handleMouseDownConfirmPassword: (e: any) => void;
  handleClickShowPassword: () => void;
  handleClickShowConfirmPassword: () => void;
  isCheck: boolean;
  showPassword: boolean;
  showconfirmPassword: boolean;
}
