import axios from "axios";
import BASE_URL from "../constants/BaseURL";

axios.defaults.baseURL = BASE_URL;

export const setAuthHeader = (token: string = "") => {
    const autorizationToken = token === "" ? "" : `Bearer ${token}`;
    axios.defaults.headers.common.Authorization = autorizationToken;
};
