import axios, { AxiosRequestConfig } from 'axios';

// export type ApiMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
// export type ApiConfig = {
//     url: string;
//     method: ApiMethod;
// };
const reqest = axios.create({
    baseURL: '/api/v1',
    timeout: 50000
});
reqest.interceptors.response.use(function (response) {
    if (response.status === 200) {
        return response.data;
    } else {
        return response;
    }
});
export default reqest;
