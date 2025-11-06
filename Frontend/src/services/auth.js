// Simple auth service using fetch and Vite env variable VITE_API_BASE_URL
const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

async function handleResponse(res) {
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { message: text };
  }
  if (!res.ok) {
    const err = (data && data.detail) || (data && data.message) || res.statusText || 'Error';
    throw new Error(err);
  }
  return data;
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/api/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
}

export async function register(first_name, last_name, email, password) {
  const res = await fetch(`${API_BASE}/api/auth/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ first_name, last_name, email, password }),
  });
  return handleResponse(res);
}

export default { login, register };
