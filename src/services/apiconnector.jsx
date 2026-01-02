// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, header, params) =>{
//         return({
//             method:`${method}`,
//             url: `${url}`,
//             data: bodyData ? bodyData : null,
//             headers: header ? header: null,
//             params: params ? params : null,
//         })
// }

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiConnector = async (
  method,
  url,
  bodyData = null,
  headers = {},
  params = {}
) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: bodyData,
      headers,
      params,
    });

    return response; // ✅ ACTUAL AXIOS RESPONSE
  } catch (error) {
    throw error;
  }
};

