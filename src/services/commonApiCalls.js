import { SYSTEM_ERROR } from "../config/CONSTANTS";
import { httpClient } from "./httpClient";

export const onApiCall = async ({ method, url, data }) => {
  const constructHeaders = () => {
    return {
      common: { "Content-Type": "application/json" },
    };
  };

  try {
    const response = await httpClient.request({
      url,
      method,
      data,
      headers: constructHeaders(),
    });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    //Any status code that falls outside 2xx
    if (error.response) {
      return {
        data: error.response.data.error,
        status: error.response.status,
      };
    } else if (error.request) {
      //Request has been made but no response is received
      return {
        data: SYSTEM_ERROR,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      return {
        data: SYSTEM_ERROR,
      };
    }
  }
};
