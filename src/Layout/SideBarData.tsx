/* eslint-disable react-hooks/rules-of-hooks */

import { Icons } from "@/shared";
import { routeNames } from "@/static";
import { usePermissions } from "@/hooks";

const {
  GoEye,
  MdWork,
  MdSettings,
  MdPermIdentity,
  AiOutlineWarning,
  AiOutlineUserAdd,
  MdReduceCapacity,
  AiOutlineFileText,
  MdOutlinePeopleAlt,
  MdOutlineDashboard,
} = Icons;

const {
  START,
  VIEWJOB,
  INITIAL,
  USER_ROLE,
  CREATE_JOB,
  ADD_EMPLOYEE,
  EMPLOYEES,
  ADDITIONAL_CHARGE,
  NEW_APPLICATION,
  VIEW_SUBMIITED_APPLICATIONS,
} = routeNames;
export const SideBarData = () => {
  // const prem = usePermissions("")
  // console.log()
  const SidebarItems = [
    {
      name: "Dashboard",
      url: START,
      Icon: <MdOutlineDashboard />,
      status: false,
      permission: true,
    },
    {
      name: "Employees",
      Icon: <MdOutlinePeopleAlt />,
      // url: START,
      status: false,
      permission: usePermissions("employee")?.read,
      items: [
        {
          name: "Add Employee",
          url: ADD_EMPLOYEE,
          Icon: <AiOutlineUserAdd />,
          status: false,
          permission: usePermissions("employee")?.create,
        },

        {
          name: "View Employees",
          url: EMPLOYEES,
          Icon: <GoEye />,
          status: false,
          permission: usePermissions("employee")?.update,
        },
      ],
    },
    {
      name: "Applications",
      Icon: <AiOutlineFileText />,
      status: false,
      permission: usePermissions("application")?.read,
      items: [
        {
          name: "Add Application",
          url: NEW_APPLICATION,
          Icon: <AiOutlineFileText />,
          status: false,
          permission: usePermissions("application")?.create,
        },
        {
          name: "Submitted Application",
          url: VIEW_SUBMIITED_APPLICATIONS,
          Icon: <AiOutlineFileText />,
          status: false,
          permission: usePermissions("application")?.create,
        },
      ],
    },
    {
      name: "Jobs",
      // url: START ,
      Icon: <MdWork />,
      status: false,
      permission: usePermissions("job")?.read,
      items: [
        {
          name: "Create Job Request",
          url: CREATE_JOB,
          Icon: <AiOutlineUserAdd />,
          status: false,
          permission: usePermissions("job")?.create,
        },
        {
          name: "View Job",
          url: VIEWJOB,
          Icon: <GoEye />,
          status: false,
          permission: usePermissions("job")?.update,
        },
      ],
    },
    {
      name: "Interviews",
      url: INITIAL,
      Icon: <MdReduceCapacity />,
      status: true,
      permission: usePermissions("interview")?.read,
    },
    {
      name: "Settings",
      Icon: <MdSettings />,
      status: false,
      permission: true,
      items: [
        {
          name: "User Role",
          url: USER_ROLE,
          Icon: <MdPermIdentity />,
          status: false,
          permission: usePermissions("employee")?.create,
        },
        {
          name: "Additional Charges",
          url: ADDITIONAL_CHARGE,
          Icon: <AiOutlineWarning />,
          status: false,
          permission: usePermissions("employee")?.update,
        },
      ],
    },
  ];

  return SidebarItems;
};
