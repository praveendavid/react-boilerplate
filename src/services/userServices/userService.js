import { onApiCall } from "../commonApiCalls";
import { GET_USER_DETAILS } from "./CONSTANTS";

export const getUserDetails = () => {
  return onApiCall({
    url: GET_USER_DETAILS,
    method: GET,
  });
};
