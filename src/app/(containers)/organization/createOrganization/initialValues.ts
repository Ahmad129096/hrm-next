import { OrganizationInterface } from "../../Interfaces";
export const initialValue: OrganizationInterface = {
  organizationName: "",
  organizationTypeId: "",
  organizationEmail: "",
  phoneNumber: "",
  subDomain: "",
  yearEstablished: `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`,

  logo: "",
  organizationAddress: "",
  zipCode: "",
  city: "",
  province: "",
  country: "",
};
