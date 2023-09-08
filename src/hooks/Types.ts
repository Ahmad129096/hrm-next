import { AxiosResponse } from "axios";

export interface params {
    method?: "post" | "get" | "patch" | "put" | "delete";
    data?: object;
    url: string;
    isJsonType?: boolean;
    headers?:object;
}

export type axiosResponse = {
    message: string;
} & AxiosResponse;
