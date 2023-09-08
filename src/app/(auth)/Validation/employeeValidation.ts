import * as yup from "yup";
import { validations } from "./validations";
const { selectType, selectEmployee } = validations;
export const SignUpValidation = yup.object().shape({
  employeeId: selectEmployee,
  data: selectType,
  row: selectType,
});
  
