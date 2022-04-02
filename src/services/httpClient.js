import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 36000
});

httpClient.interceptors.request.use((request, error) => {
  //Do something before request is sent
  if (error) {
    console.log(error);
    return Promise.reject(request);
  }
  return request;
});

httpClient.interceptors.response.use(
  (response) => {
    //Any status code that falls within 2xx
    if (response && response.data) {
      return response;
    }
  },
  (error) => {
    //Any status code that falls outside 2xx
    if (error.response) {
      console.log(error);
    } else if (error.request) {
      //Request has been made but no response is received
      console.log(error.message);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(error.message);
    }
  }
);
