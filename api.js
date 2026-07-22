import axios from 'axios'

// The proxy server routes everything under /api/{endpoint}.
// Some env files set the base WITH /api, some WITHOUT — normalize both.
const RAW = import.meta.env.VITE_API_URL || 'http://localhost:3001'
const BASE_URL = RAW.endsWith('/api') ? RAW : `${RAW.replace(/\/$/, '')}/api`

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

export default api
