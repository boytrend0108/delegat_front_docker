import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

// const state = {
//   isSubmitting: false,
//   currentUser: null,
//   validationErrors: null,
//   isLoggedIn: null,
// }

export const mutationTypes = {
  registerStart: '[auth] registerStart',
  registerSuccess: '[auth] registerSuccess',
  registerFailed: '[auth] registerFailed',

  loginStart: '[auth] loginStart',
  loginSuccess: '[auth] loginSuccess',
  loginFailed: '[auth] loginFailed',
}

export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
}

// const mutations = {
//   // [mutationTypes.registerStart](state) {
//   //   state.isSubmitting = true
//   //   state.validationErrors = null
//   // },
//   // [mutationTypes.registerSuccess](state, payload) {
//   //   state.isSubmitting = false
//   //   state.currentUser = payload
//   //   state.isLoggedIn = true
//   // },
//   // [mutationTypes.registerFailed](state, payload) {
//   //   state.isSubmitting = false
//   //   state.validationErrors = payload
//   // },
//   // [mutationTypes.loginStart](state) {
//   //   state.isSubmitting = true
//   //   state.validationErrors = null
//   // },
//   // [mutationTypes.loginSuccess](state, payload) {
//   //   state.isSubmitting = false
//   //   state.currentUser = payload
//   //   state.isLoggedIn = true
//   // },
//   // [mutationTypes.loginFailed](state, payload) {
//   //   state.isSubmitting = false
//   //   state.validationErrors = payload
//   // },
// }

// const actions = {
//   // [actionTypes.register](context, credentials) {
//   //   return new Promise((resolve) => {
//   //     context.commit(mutationTypes.registerStart)
//   //     authApi
//   //       .register(credentials)
//   //       .then((response) => {
//   //         console.log('response', response)
//   //         context.commit(mutationTypes.registerSuccess, response.data.user)

//   //         setItem('accessToken', response.data.user.token)
//   //         resolve(response.data.user)
//   //       })
//   //       .catch((result) => {
//   //         console.log('result errors', result)
//   //         context.commit(
//   //           mutationTypes.registerFailed,
//   //           result.response.data.errors
//   //         )
//   //       })
//   //   })
//   // },
//   // [actionTypes.login](context, credentials) {
//   //   return new Promise((resolve) => {
//   //     context.commit(mutationTypes.loginStart)
//   //     authApi
//   //       .login(credentials)
//   //       .then((response) => {
//   //         console.log('response', response)
//   //         context.commit(mutationTypes.loginSuccess, response.data.user)

//   //         setItem('accessToken', response.data.user.token)
//   //         resolve(response.data.user)
//   //       })
//   //       .catch((result) => {
//   //         context.commit(mutationTypes.loginFailed, result.response.data.errors)
//   //       })
//   //   })
//   // },
// }
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
  
            setItem('accessToken', response.data.user.token)
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