import Cookies from 'js-cookie';
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
// import { removeEmpty } from 'utils';

import { END_POINT, TOKEN_KEY } from '../store';

// interface IParams {
//   url: string;
//   params?: object;
//   payload?: object;
//   transform?: (res: object) => void;
// }

interface IPayload {
  url: string;
  payload?: object;
  transform?: (res: object) => object;
}

export const instance = axios.create({
  baseURL: END_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 180000,
  validateStatus: (status) => status >= 200 && status < 300,
});

instance.interceptors.request.use((config): InternalAxiosRequestConfig => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) {
    const $config = config;
    $config.headers.Authorization = `Bearer ${token}`;
    $config.headers['Content-Type'] = 'application/json';
  }
  return config;
});

const post = async (
  { url, payload, transform }: IPayload,
  axiosConfig?: AxiosRequestConfig
) => {
  const res = await instance
    .post(url, payload, axiosConfig)
    .then((response) => response)
    .catch((response) => response);

  if (res?.name === 'AxiosError') {
    throw res;
  }
  if (typeof transform === 'function') {
    const x = transform(res);
    return x;
  }

  return res?.data;
};

// const get = async (
//   { url, params, transform }: IParams,
//   axiosConfig?: AxiosRequestConfig
// ) => {
//   const res = await instance
//     .get(url, {
//       ...axiosConfig,
//       ...(params
//         ? {
//           params: removeEmpty(params),
//         }
//         : {}),
//     })
//     .then((response) => response?.data)
//     .catch((response) => response);

//   if (res?.name === 'AxiosError') {
//     throw res;
//   }

//   if (typeof transform === 'function') {
//     const x = transform(res);
//     return x;
//   }
//   return res?.data;
// };

// const put = async (
//   { url, payload, transform }: IParams,
//   axiosConfig?: AxiosRequestConfig
// ) => {
//   const res = await instance
//     .put(url, payload, axiosConfig)
//     .then((response) => response)
//     .catch((response) => response);

//   if (res?.name === 'AxiosError') {
//     throw res;
//   }

//   if (typeof transform === 'function') {
//     const x = transform(res);
//     return x;
//   }

//   return res?.data;
// };

// const patch = async (
//   { url, params, transform }: IParams,
//   axiosConfig?: AxiosRequestConfig
// ) => {
//   const res = await instance
//     .patch(url, params, axiosConfig)
//     .then((response) => response)
//     .catch((response) => response);
//   if (res?.name === 'AxiosError') {
//     throw res;
//   }
//   if (typeof transform === 'function') {
//     const x = transform(res);
//     return x;
//   }

//   return res?.data;
// };

// const remove = async (
//   { url, payload, transform }: IParams,
//   axiosConfig?: AxiosRequestConfig
// ) => {
//   const res = await instance
//     .delete(url, payload, axiosConfig)
//     .then((response) => response)
//     .catch((response) => response);
//   if (res?.name === 'AxiosError') {
//     throw res;
//   }
//   if (typeof transform === 'function') {
//     const x = transform(res);
//     return x;
//   }

//   return res?.data;
// };

export { post };
