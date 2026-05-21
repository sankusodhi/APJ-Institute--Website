const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function resolveMediaUrl(value) {
  if (!value) return '';
  if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('data:') || value.startsWith('blob:')) {
    return value;
  }

  const origin = API_BASE.replace(/\/api\/?$/, '');
  return `${origin}${value.startsWith('/') ? value : `/${value}`}`;
}
