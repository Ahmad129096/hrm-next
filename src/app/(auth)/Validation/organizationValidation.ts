import * as yup from "yup";
import { validations } from "./validations";

const {
  url,
  type,
  city,
  name,
  email,
  cnicNo,
  salary,
  address,
  OrgName,
  country,
  zipCode,
  province,
  department,
  designation,
  stringField,
  phone_number,
  designationName,
  emailNotRequired,
  departmentNamefield,
} = validations;

export const OrganizationValidation = yup.object().shape({
  city: city,
  subDomain: url,
  country: country,
  zipCode: zipCode,
  province: province,
  organizationTypeId: type,
  phoneNumber: phone_number,
  organizationName: OrgName,
  organizationEmail: emailNotRequired,
});
export const DepartmentValidations = yup.object().shape({
  departmentName: department,
  designationName: designationName,
});
export const newDeaprtment = yup.object().shape({
  departmentName: departmentNamefield,
});
export const addEmployeeValidations = yup.object().shape({
  name: name,
  email: email,
  salary: salary,
  cnicNo: cnicNo,
  address: address,
  phoneNumber: phone_number,
  optionalNumber: phone_number,
  departmentName: department,
  designationName: designation,
  education: yup.array().of(
    yup.object().shape({
      educationLevel: stringField,
      educationSubject: stringField,
      instituteName: stringField,
      YearOfeducation: stringField,
    })
  ),
  experience: yup.array().of(
    yup.object().shape({
      experiencetitle: stringField,
      experienceYears: stringField,
      experienceDescription: stringField,
    })
  ),
});

  
