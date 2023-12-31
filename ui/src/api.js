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
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  return config
};

const responseSuccessInterceptor = (response) => {
  return response.data;
};

const responseErrorInterceptor = async (error) => {
  if (error.response?.status === 401) {
    localStorage.clear()
    location.reload()
    return false
  }
  return error.response?.data;
};

/** Adding the request interceptors */
HTTP.interceptors.request.use(requestInterceptor);
HTTP.interceptors.response.use(
  responseSuccessInterceptor,
  responseErrorInterceptor
);

export { HTTP };
