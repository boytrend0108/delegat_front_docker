import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

export default {
  state:{ 
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null,
  },
  getters: {
    isSubmitting(state){
      return state.isSubmitting
    },
    validationErrors(state){
      return state.validationErrors
    }
  },
  actions: {
    register({commit},credentials) {
      return new Promise((resolve) => {
        commit('registerStart')
        authApi
          .register(credentials)
          .then((response) => {
            console.log('response', response)
            commit('registerSuccess', response.data.user)
            setItem('accessToken', response.data.user.access_token)
            resolve(response.data.user)
          })
          .catch((result) => {
            console.log('result errors', result)
            commit('registerFailed',result.response.data.errors)
          })
      })
    },
    login({commit}, credentials) {
      return new Promise((resolve) => {
        commit("loginStart")
        authApi
          .login(credentials)
          .then((response) => {
            console.log('response', response)
            commit('loginSuccess', response.data.user)
  
            setItem('accessToken', response.data.user.token)
            resolve(response.data.user)
          })
          .catch((result) => {
            commit('loginFailed', result.response.data.errors)
          })
      })
    },

  },
  mutations: {
    registerStart(state) {
      state.isSubmitting = true
      state.validationErrors = null
      console.log("register start")
    },
    registerSuccess(state, payload) {
      state.isSubmitting = false
      state.currentUser = payload
      state.isLoggedIn = true
    },
    registerFailed(state, payload) {
      state.isSubmitting = false
      state.validationErrors = payload
    },
    loginStart(state) {
      state.isSubmitting = true
      state.validationErrors = null
    },
    loginSuccess(state, payload) {
      state.isSubmitting = false
      state.currentUser = payload
      state.isLoggedIn = true
    },
    loginFailed(state, payload) {
      state.isSubmitting = false
      state.validationErrors = payload
    },

  }
 
}