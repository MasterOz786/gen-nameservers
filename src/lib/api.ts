// import { SubmitDomain } from '@/pages/submit-domain'
import axios from 'axios';

// Create axios instance with base URL and default headers
const api = axios.create({
  baseURL:
    (typeof process !== 'undefined' && process.env?.VITE_API_URL) ||
    'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Domains API
export const domainsApi = {
  // submitDomain: (domain: string, email: string) =>
  submitDomain: (domain: string) => api.post('/nameservers/create', { domain }),
  getDomains: () => api.get('/nameservers'),
  getDomain: (domain: string) => api.get(`/nameservers/${domain}`),
  deleteDomain: (domain: string) => api.delete(`/nameservers/${domain}`),
};

// Tasks API
export const tasksApi = {
  getTaskStatus: (taskId: string) => api.get(`/tasks/status/${taskId}`),
};

export default api;
