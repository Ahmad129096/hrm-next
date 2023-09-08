import axios from "axios";
import { logout } from "@/redux/slices/authSlice";
import { showSnackbar } from "@/redux/slices/snackbarSlice";
import { store } from "@/redux/store";

export const _instance = axios.create({
  baseURL: "http://localhost:5000",
});

const { dispatch } = store;

_instance.interceptors.request.use(
  (config) => config,
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    delete response.request;
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { message = "", isAxiosError = false, response } = error;
    const list: string[] = [];
    if (message && isAxiosError && !response) {
      return dispatch(showSnackbar({ message: message, type: "error" }));
    } else if (response.status === 401) {
      if (response.data.message === "jwt expired" && response.status === 401) {
        dispatch(logout());
      }
      return dispatch(
        showSnackbar({ message: response.data.message, type: "error" })
      );
    } else if (response.status === 400) {
      return dispatch(
        showSnackbar({ message: response.data.message, type: "error" })
      );
    } else if (response.status === 403) {
      return dispatch(
        showSnackbar({ message: error?.response?.data?.message, type: "error" })
      );
    } else if (response.status === 404) {
      return dispatch(
        showSnackbar({ message: error?.response?.data?.message, type: "error" })
      );
    } else if (response.status === 422) {
      const {
        data: { message, error = {} },
      } = response;
      for (const key in error) {
        list.push(error[key]);
      }
      if (list.length)
        dispatch(showSnackbar({ message: list.join(), type: "error" }));
      else dispatch(showSnackbar({ message: message, type: "error" }));
    } else if (response.status === 500) {
      return dispatch(
        showSnackbar({ message: response.data.message, type: "error" })
      );
    }
    return Promise.reject(error);
  }
);
