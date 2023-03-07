/* eslint-disable no-undef */
import axios from 'axios';
import { getLocalStorage } from '../utils/utility';

if (typeof window !== 'undefined') {
  const accessToken = getLocalStorage('accessToken');
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

axios.defaults.baseURL = 'http://localhost:3001';

function refreshAPIToken() {
  if (typeof window !== 'undefined') {
    const accessToken = getLocalStorage('accessToken');
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
}

export { refreshAPIToken };
export default axios;
