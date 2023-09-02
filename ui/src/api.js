import axios from "axios";


const apiBaseUrl = `${import.meta.env.VITE_API_URL}api/`;

const baseConfig = {
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: { Accept: "application/json" },
};

const HTTP = axios.create(baseConfig);
HTTP.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const requestInterceptor = (config) => {
  return config;
};

const responseSuccessInterceptor = (response) => {
  return response.data;
};

const responseErrorInterceptor = async (error) => {
  console.log(error)
  return error.response?.data;
};

/** Adding the request interceptors */
HTTP.interceptors.request.use(requestInterceptor);
HTTP.interceptors.response.use(
  responseSuccessInterceptor,
  responseErrorInterceptor
);

export { HTTP };
