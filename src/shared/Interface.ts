export interface InputFieldProps {
  as?: string;
  id?: string;
  margin?: string;
  name?: string;
  label?: string;
  size?: string;
  type?: "text" | "number" | "password" | any;
  helperText?: any;
  error?: any;
  value?: any;
  autoComplete?: string;
  disabled?: boolean;
  InputProps?: any;
  required?: boolean;
  fullWidth?: boolean;
  autoFocus?: boolean;
  onSelect?: any;
  menuData?: any;
  onPaste?: (e: Event) => void;
  onCopy?: (e: Event) => void;
  onCut?: (e: Event) => void;
  onDrag?: (e: Event) => void;
  onDrop?: (e: Event) => void;
  onInput?: (e: Event, value?: any) => void;
  onChange?: any;
  sx?: object | any;
}

export interface ButtonProps {
  type?: "reset" | "submit" | "button";
  fullWidth?: boolean;
  color?: "success" | "error" | "secondary" | "primary";
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  endIcon?: any;
  onClick?: any;
  sx?: object;
  btnText: string | number | any;
}

export interface ForkmikProps {
  initialValues?: any;
  validationSchema?: any;
  enableReinitialize?: any;
  onSubmit: (values: any, props?: any) => void;
  FormData: any;
}
export interface autoCompleteProps extends InputFieldProps {
  onOpen: () => void;
  onClose: () => void;
  isOptionEqualToValue?: ((option?: any, value?: any) => boolean) | undefined;
  getOptionLabel?: ((option?: any) => string) | undefined;
  options?: any;
  loading?: any;
  renderInput?: any;
  onInputChange?: (event?: any, value?: any) => void;
  onChange?: (event?: any, value?: any) => void;
}

export interface TableProps {
  headingTitle: any;
  TableData: any;
}

export interface PageHeaderProps {
  header: String;
  btnText: String;
  navigate?: any;
}
