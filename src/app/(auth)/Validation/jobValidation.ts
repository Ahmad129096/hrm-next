import * as yup from "yup";
import { validations } from "./validations";
const { title, designations,salaryrange, requirements} = validations;
export const jobCreateValidation = yup.object().shape({
    title: title,
    designation: designations,
    salaryrange:salaryrange,
    requirements: requirements,
});