/* eslint-disable no-undef */
import axios from 'axios';
import { getLocalStorage } from '../utils/utility';

if (typeof window !== 'undefined') {
  const accessToken = getLocalStorage('accessToken');
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

axios.defaults.baseURL = 'https://main-dashboard-backend.demo.kc-chain.com';

function refreshAPIToken() {
  if (typeof window !== 'undefined') {
    const accessToken = getLocalStorage('accessToken');
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
}

export { refreshAPIToken };
export default axios;
