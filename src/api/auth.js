import axios from '@/api/axios'

const register = (credentials) => {
  return axios.post('/',{
    user: credentials 
      // "username": "TestName"
  })
}

const login = (credentials) => {
  return axios.post('/users/login', {user: credentials})
}

export default {
  register,
  login,
}