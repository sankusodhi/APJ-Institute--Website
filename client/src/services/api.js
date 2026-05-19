const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function buildHeaders(extraHeaders = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...extraHeaders,
  };

  const token = localStorage.getItem('apj_token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

async function request(method, url, body, options = {}) {
  const isFormData = body instanceof FormData;
  const headers = buildHeaders(options.headers);

  // Let browser set multipart boundary for FormData.
  if (isFormData) {
    delete headers['Content-Type'];
  }

  const res = await fetch(`${BASE_URL}${url}`, {
    method,
    headers,
    body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
  });

  let data = null;
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    data = await res.json();
  } else {
    data = await res.text();
  }

  if (!res.ok) {
    if (res.status === 401) {
      localStorage.removeItem('apj_token');
      window.location.href = '/admin/login';
    }

    const error = new Error(data?.message || `Request failed with ${res.status}`);
    error.response = { status: res.status, data };
    throw error;
  }

  return { data, status: res.status };
}

const api = {
  get: (url, options) => request('GET', url, undefined, options),
  post: (url, body, options) => request('POST', url, body, options),
  put: (url, body, options) => request('PUT', url, body, options),
  patch: (url, body, options) => request('PATCH', url, body, options),
  delete: (url, options) => request('DELETE', url, undefined, options),
};

export default api;
