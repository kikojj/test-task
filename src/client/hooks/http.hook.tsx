import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASIC_LINK = "http://localhost:3000";

export function useHttp(link: string) {
  return {
    get: function <T>(config?: AxiosRequestConfig) {
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
    },

    post: function <T, R>(data?: T, config?: AxiosRequestConfig) {
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
    },

    put: function <T, R>(data?: T, config?: AxiosRequestConfig) {
      return axios
        .put(BASIC_LINK + link, data, config)
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
    },

    delete: function <R>(config?: AxiosRequestConfig) {
      return axios
        .delete(BASIC_LINK + link, config)
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
    },
  };
}
