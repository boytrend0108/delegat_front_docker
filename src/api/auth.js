import axios from '@/api/axios'

const register = () => {
  return axios.post('/',{
    // user: credentials
    
      "username": "string"
    
  })
}

const login = (credentials) => {
  return axios.post('/users/login', {user: credentials})
}

export default {
  register,
  login,
}