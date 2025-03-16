// import { SubmitDomain } from '@/pages/submit-domain'
import axios from 'axios'

// Create axios instance with base URL and default headers
const api = axios.create({
  baseURL: (typeof process !== 'undefined' && process.env?.VITE_API_URL) || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});


// Add request interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized errors
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { username: email, password }),
  register: (email: string, password: string, fullName: string) =>
    api.post('/auth/register', { email, password, full_name: fullName }),
}

// Domains API
export const domainsApi = {
  // submitDomain: (domain: string, email: string) =>
  submitDomain: (domain: string) =>
    api.post('/nameservers/create', { domain }),
  getDomains: () =>
    api.get('/nameservers'),
  getDomain: (domain: string) =>
    api.get(`/nameservers/${domain}`),
  deleteDomain: (domain: string) =>
    api.delete(`/nameservers/${domain}`),
}

// Tasks API
export const tasksApi = {
  getTaskStatus: (taskId: string) =>
    api.get(`/tasks/status/${taskId}`),
}

export default api