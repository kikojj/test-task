import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASIC_LINK = "http://localhost:3000";

export function useHttp(link: string) {
  function get<T>(config?: AxiosRequestConfig) {
    return axios
      .get(BASIC_LINK + link, config)
      .then((res: AxiosResponse<T>) => {
        if (res.status === 401) {
          throw new Error("Unauthorized");
        } else {
          return res.data;
        }
      })
      .catch((err) => {
        console.warn(err);
        return undefined;
      });
  }

  function post<T, R>(data?: T, config?: AxiosRequestConfig) {
    return axios
      .post(BASIC_LINK + link, data, config)
      .then((res: AxiosResponse<R>) => {
        if (res.status === 401) {
          throw new Error("Unauthorized");
        } else {
          return res.data;
        }
      })
      .catch((err) => {
        console.warn(err);
        return undefined;
      });
  }

  return {
    get,
    post,
  };
}
