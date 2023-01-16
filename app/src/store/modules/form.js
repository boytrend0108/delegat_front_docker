export default {
  state:{
    isValid: true,
    email: '',
    password: '',
  },
  getters: {
    IS_VALID(state){
      return state.isValid
    },
    EMAIL(state){
      return state.email
    },
    PASSWORD(state){
      return state.password
    }
  },
  actions: {
    GET_EMAIL({commit}, email){
      commit('SET_EMAIL', email)
    },
    A_CLEAR_FORM(){
      document.querySelector("#login-form").reset()
    }
  },

  mutations: {
    SWITCH_IS_VALID(state, param){
      state.isValid = param
    },
    SET_FORM_DATA(state,formData){
      state.email = formData.email
      state.password = formData.password
     
    },
    CLEAR_FORM(state){
      state.email = ''
      state.password = ''
      state.isValid = true
      // document.querySelector("#login-form").reset()
      console.log(state.email, state.password)
    }
  }
}