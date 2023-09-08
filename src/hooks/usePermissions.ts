"use client";
import { useAppSelector } from "./useSelector";

export const usePermissions = (value: string) => {
  const state = useAppSelector((state) => state.permissions.permissions);
  let permissionData = state.filter((data: any) => {
    return value === data.name;
  });

  return permissionData[0];
};
