import { axiosCall } from "../services";
import { params, axiosResponse } from "./Types";
import { useAppSelector } from "./useSelector";

export const useAxios = () => {
  const baseUrl = "http://localhost:5000";
  const value = useAppSelector((state) => state.auth);

  const callAxios = ({ method, data, url, isJsonType, headers }: params) => {
    return axiosCall({
      method,
      data,
      url: `${baseUrl}/${url}`,
      isJsonType,
      headers: {
        authorization: value.token,
        ...headers,
      },
    })
      .then((res: axiosResponse) => {
        return res;
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return { callAxios };
};
