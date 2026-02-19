
const BASE_URL = 	import.meta.env.VITE_API_BASE_URL 

export const register = {
  REGISTER_API: `${BASE_URL}/api/register/Drive`
}

export const csrf = {
  CSRF_API: `${BASE_URL}/csrf-token`
}