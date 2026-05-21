import axios from '../api/axios';

async function wrap(promise) {
  try {
    const res = await promise;
    return { data: res.data, status: res.status };
  } catch (err) {
    // Normalize error shape similar to previous implementation
    const status = err?.response?.status;
    const data = err?.response?.data || { message: err.message };
    const error = new Error(data?.message || err.message || 'Request failed');
    error.response = { status, data };
    throw error;
  }
}

const api = {
  get: (url, options) => wrap(axios.get(url, options)),
  post: (url, body, options) => wrap(axios.post(url, body, options)),
  put: (url, body, options) => wrap(axios.put(url, body, options)),
  patch: (url, body, options) => wrap(axios.patch(url, body, options)),
  delete: (url, options) => wrap(axios.delete(url, options)),
};

export default api;
