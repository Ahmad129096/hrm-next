import * as yup from "yup";
import { Content } from "../../../static";
const {
  long,
  short,
  required,
  enter_url,
  enter_otp,
  valid_otp,
  city_field,
  valid_name,
  phoneRegExp,
  valid_email,
  min_password,
  enter_number,
  valid_number,
  correct_name,
  country_field,
  valid_zipcode,
  enter_zipcode,
  required_name,
  password_regex,
  province_field,
  required_email,
  required_email_Username,
  valid_password,
  required_orgName,
  confirm_password,
  department_field,
  required_password,
  organization_type,
  designation_field,
  employee_type,
  restriction,
  user_name,
  confirm_required_password,
  title,
  title_regex,
  salary,
  requirement,
  designatio,
  designatio_req,
} = Content;

export const validations = {
  check: yup.bool().oneOf([true], "You must accept the policy"),
  name: yup
    .string()
    .matches(/^([A-Za-z0-9_]+ )*[A-Za-z0-9_]+$|^[A-Za-z0-9_]+$/, user_name)
    .min(3, correct_name)
    .max(30, correct_name)
    .required(required_name),
  OrgName: yup
    .string()
    .matches(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/, valid_name)
    .min(3, correct_name)
    .max(30, correct_name)
    .required(required_orgName),
  email: yup.string().email(valid_email).required(required_email),

  email_username: yup.string().required(required_email_Username),

  emailNotRequired: yup.string().email(valid_email).notRequired(),
  password: yup
    .string()
    .required(required_password)
    .matches(password_regex, valid_password)
    .min(8, min_password)
    .max(50, long),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], confirm_password)
    .required(confirm_required_password),
  type: yup.string().required(organization_type),
  city: yup.string().required(city_field),
  province: yup.string().required(province_field),
  country: yup.string().required(country_field),
  zipCode: yup
    .string()
    .required(enter_zipcode)
    .min(5, valid_zipcode)
    .max(9, valid_zipcode),
  url: yup
    .string()
    .matches(/^(http:\/\/|https:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, enter_url)
    .notRequired(),
  address: yup.string().min(3, short).max(100, long).required(required),
  otp: yup.string().required(enter_otp).min(6, valid_otp).max(6, valid_otp),
  phone_number: yup
    .string()
    .notRequired()
    .matches(phoneRegExp, valid_number)
    .min(10, enter_number)
    .max(11, enter_number),
  designationName: yup
    .string()
    .required(required_orgName)
    .matches(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/, valid_name)
    .min(3, correct_name)
    .max(30, correct_name),
  designation: yup.string().required(designation_field),
  department: yup.string().required(department_field),
  departmentNamefield: yup
    .string()
    .required(required_orgName)
    .matches(/^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/, valid_name)
    .min(3, correct_name)
    .max(30, correct_name),
  salary: yup.number().typeError("age must be a number").min(2).required(),
  selectEmployee: yup.string().required(employee_type),
  selectType: yup.string().required(restriction),
  cnicNo: yup
    .string()
    .matches(phoneRegExp)
    .max(20, "Please Enter Valid Cnic No.")
    .min(5, "Please Enter Valid Cnic No.")
    .notRequired(),
  stringField: yup.string().min(4, "Please enter valid Input").notRequired(),
  stringFieldRequired: yup
    .string()
    .min(4, "Please enter valid Input")
    .required("Please Enter Input"),
  title: yup
    .string()
    .matches(/^[A-Za-z]+$/, title_regex)
    .required(title),
  salaryrange: yup.string().required(salary),
  requirements: yup.string().required(requirement),
  designations: yup
    .string()
    .matches(/^[A-Za-z]+$/, designatio)
    .required(designatio_req),
};
