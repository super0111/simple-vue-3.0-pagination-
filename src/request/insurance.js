import ApiRequest from "./request";
// import axios from 'axios'
const baseURL = 'https://api.insurace.io/ops/v1';

const apiRequest = new ApiRequest();

// apiRequest.axios.interceptors.request.use(
//   (config) => {
//       return Promise.resolve(config);
//   },
//   (error) => {
//       return Promise.reject(error);
//   }
// );

// apiRequest.axios.interceptors.response.use(
//   (data) => {
//       return Promise.resolve(data);
//   },
//   (error) => {
//       console.log(error)
//       return Promise.reject(error);
//   }
// );

// const gerParamWithCode = (data) => {
//   return {
//     "code": 'dRsOlTd0UDcMkcCtunc7exPLz3eVnwikjNV4sebGalfq1qWpEzECQg',
//     ...data,
//   }
// }
export const getCoverList = () => {
  // const body = gerParamWithCode(_data);
  const body = {
    chain: "ETH",
    // params: {
    //   code: 'dRsOlTd0UDcMkcCtunc7exPLz3eVnwikjNV4sebGalfq1qWpEzECQg',
    // }
  }
  const options = {
    params: {
      code: 'dRsOlTd0UDcMkcCtunc7exPLz3eVnwikjNV4sebGalfq1qWpEzECQg',
    }
  }
  return apiRequest.axios.post(`${baseURL}/getProductList`, body, options)
  // const paramArr = [];
  // Object.keys(data).forEach(key => {
  //   paramArr.push(key + '=' + data[key]);
  // })
  // const paramString = paramArr.join('&')
  // return axios.post(`${baseURL}/getProductList?${paramString}`)
}