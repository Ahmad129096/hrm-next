// export interface SelectDepartment {
//   newDepartmentSubmit: (value: any) => void;
//   handleSubmit: (value: any) => void;
//   DesignationHandleSubmit: (value: any) => void;
//   initialValue: object;
//   departments: any;
//   designations: any;
//   open: boolean;
//   handleClickOpen?: (value: any) => void;
//   handleClose?: (value: any) => void;
// }



// export interface OrganizationInterface {
//   organizationName: string;
//   organizationTypeId: string;
//   organizationEmail?: string;
//   phoneNumber?: string;
//   subDomain?: string;
//   yearEstablished?: string | any;
//   logo?: string;
//   organizationAddress: string;
//   zipCode?: string;
//   city: string;
//   province: string;
//   country: string;
// }
// export interface OrganizationProps {
//   deleteImage: () => void;
//   uploadImage: (e: Event | any) => void;
//   handleSubmit: (values: OrganizationInterface, props: any) => void;
//   initialValue: OrganizationInterface;
//   data: object | any;
//   check: boolean;
//   img: any;
//   countries: object | any;
//   states: object | any;
//   getCountries: () => void;
//   getStates: (value: any | null | undefined) => void;
//   getCities: (value: any | null | undefined) => void;
//   cities: object | any;
// }

// export type designationsData = Pick<
//   SelectDepartment,
//   | "DesignationHandleSubmit"
//   | "handleClickOpen"
//   | "handleClose"
//   | "open"
//   | "departments"
// >;

// export type DepData = Pick<SelectDepartment, "newDepartmentSubmit">;

// // export interface SelectDepartmentData{
// //     newDepartmentSubmit: (value: any) => void;
// // }
// export interface addDepartment {
//   initialValue: any;
//   open: boolean;
//   handleClose: (value: any) => void;
//   handleClickOpen: (value: any) => void;
//   newDepartmentSubmit: (value: any) => void;
// }
// export interface departmentInterFace {
//   departmentName: String;
// }
// export interface departmentDesignationInterFace {
//   departmentName: String;
//   designationName: String;
// }
// interface education {
//   educationLevel: string;
//   educationSubject: string;
//   instituteName: string;
//   YearOfeducation: string;
// }
// interface experience {
//   experiencetitle: "";
//   experienceYears: "";
//   experienceDescription: "";
// }
// export interface addEmployeeInterface {
//   name: string;
//   gender?: string;
//   email: string;
//   salary: number;
//   cnicNo?: string;
//   address: string;
//   joiningdate: string;
//   phoneNumber?: string;
//   optionalNumber?: string;
//   departmentName: string;
//   designationName: string;
//   education: Array<education>;
//   experience: Array<experience>;
// }

  


//   export interface addEmployeeprops{
//     img?:any,
//     uploadImage?:any,
//     deleteImage?:any,
//     initialValue:addEmployeeInterface,
//     addEmployeeHandlesubmit:(value: any) => void;
//     designations:String|any;
//     departments:String|any;
//     address?:Pick<addEmployeeInterface,'address'>



//   }
// export interface departmentInterFace {
//   departmentName: String;
// }
// export interface departmentDesignationInterFace {
//   departmentName: String;
//   designationName: String;
// }
// interface permission {
//   name: String;
//   create: boolean;
//   read: boolean;
//   update: boolean;
//   delete: boolean;
// }

// export interface AdditionalChargeInteface {
//   employeeId: String;
//   permissionType: String;
//   permission: Array<permission>;
// }

// export interface AdditionalChargeProps {
//   initialValue: AdditionalChargeInteface;
//   handleSubmit: (value: any) => void;
//   employeePermission: (value: any) => void;
//   isCheck: boolean;
//   permission: any;
//   employee: any;
//   permissionObject: Array<any>;
// }

  
// export interface addEmployeeprops {
//   img?: any;
//   uploadImage?: any;
//   deleteImage?: any;
//   initialValue: addEmployeeInterface;
//   addEmployeeHandlesubmit: (value: any) => void;
//   designations: String | any;
//   departments: String | any;
//   address?: Pick<addEmployeeInterface, "address">;
// }

// export interface job {
//   logo:string;
//   title: string;
//   jobtag: string[];
//   designation:string
//   department:string[]
//   requirements: string;
//   salaryrange: string;
//   responsibleper:string[]
// }






export interface SelectDepartment {
    data: any;
    open: boolean;
    selectedDepartment:string[],
    selectedDesignation:string[],
    handleClose?: (value: any) => void;
    handleSubmit: (value: any) => void;
    handleClickOpen?: (value: any) => void;
    newDepartmentSubmit: (value: any) => void;
    DesignationHandleSubmit: (value: any) => void;
    handleDepartmentCheckboxChange:(event: React.ChangeEvent<HTMLInputElement>, designationId: string) => void
    handleDesignationCheckboxChange:(event: React.ChangeEvent<HTMLInputElement>, designationId: string) => void
}
export interface editJobprops {
  img: any,
  names: any,
  check: any,
  employees: any,
  deleteImage: any
  uploadImage: any
  initialValue: any
  department:any
  handleSubmit: any
}

export interface EditDepartment {
  newDepartmentSubmit: (value: any) => void;
  renameDepartment:(departmentId: string, newName: string)=> void;
  handleNameChange:(id: string, value: string)=>void;
  deleteDepartment:(departmentId: string) => void;
  initialValue: object;
  departments: any;
  designations: any;
  setNewName:any;
  newName:any;
  errors:any;
  open: boolean;
  handleClickOpen?: (value: any) => void;
  handleClose?: (value: any) => void;
  DesignationHandleSubmit: (value: any) => void;

}

export interface OrganizationInterface {
  organizationName: string;
  organizationTypeId: string;
  organizationEmail?: string;
  phoneNumber?: string;
  subDomain?: string;
  yearEstablished?: string | any;
  logo?: string;
  organizationAddress: string;
  zipCode?: string;
  city: string;
  province: string;
  country: string;
}
export interface OrganizationProps {
  deleteImage: () => void;
  uploadImage: (e: Event | any) => void;
  handleSubmit: (values: OrganizationInterface, props: any) => void;
  initialValue: OrganizationInterface;
  data: object | any;
  check: boolean;
  img: any;
  countries: object | any;
  states: object | any;
  getCountries: () => void;
  getStates: (value: any | null | undefined) => void;
  getCities: (value: any | null | undefined) => void;
  cities: object | any;
  isLoading:any;
  
}

export type designationsData = Pick<
  SelectDepartment,
  | "DesignationHandleSubmit"
  | "handleClickOpen"
  | "handleClose"
  | "open"
  | "data"
>;

export type DepData = Pick<SelectDepartment, "newDepartmentSubmit">;

export interface addDepartment {
  initialValue: any;
  open: boolean;
  handleClose: (value: any) => void;
  handleClickOpen: (value: any) => void;
  newDepartmentSubmit: (value: any) => void;
}

export interface departmentInterFace {
  departmentName: String;
}
export interface departmentDesignationInterFace {
  preventDefault(): unknown;
  departmentName: String;
  designationName: String;
  module:any
}
interface education {
  educationLevel: string;
  educationSubject: string;
  instituteName: string;
  YearOfeducation: string;
}
interface experience {
  experiencetitle: "";
  experienceYears: "";
  experienceDescription: "";
}
export interface addEmployeeInterface {
  name: string;
  gender?: string;
  email: string;
  salary: number;
  cnicNo?: string;
  address: string;
  joiningdate: string;
  phoneNumber?: string;
  optionalNumber?: string;
  departmentName: string;
  designationName: string;
  education: Array<education>;
  experience: Array<experience>;
}

  


  export interface addEmployeeprops{
    img?:any,
    uploadImage?:any,
    deleteImage?:any,
    initialValue:addEmployeeInterface,
    addEmployeeHandlesubmit:(value: any) => void;
    designations:String|any;
    departments:String|any;
    address?:Pick<addEmployeeInterface,'address'>
  }

export interface departmentInterFace {
  departmentName: String;
}
export interface departmentDesignationInterFace {
  departmentName: String;
  designationName: String;
}
interface permission {
  name: String;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export interface AdditionalChargeInteface {
  employeeId: String;
  permissionType: String;
  permission: Array<permission>;
}

export interface AdditionalChargeProps {
  initialValue: AdditionalChargeInteface;
  handleSubmit: (value: any) => void;
  employeePermission: (value: any) => void;
  isCheck: boolean;
  permission: any;
  employee: any;
  permissionObject: Array<any>;
}

  
export interface addEmployeeprops {
  img?: any;
  uploadImage?: any;
  deleteImage?: any;
  initialValue: addEmployeeInterface;
  addEmployeeHandlesubmit: (value: any) => void;
  designations: String | any;
  departments: String | any;
  address?: Pick<addEmployeeInterface, "address">;
}

export interface job {
    img: any,
    names: any,
    employees: any,
    uploadImage: any,
    deleteImage: any,
    handleSubmit: any,
    initialValue: any,
  logo:string;
  title: string;
  jobtag: string[];
  designation:string
  department:string
  requirements: string;
  salaryrange: string;
  responsibleper:string[]
  check:boolean
}








