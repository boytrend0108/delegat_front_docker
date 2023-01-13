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
    }
  },
  mutations: {
    SWITCH_IS_VALID(state, param){
      state.isValid = param
    },
    SET_FORM_DATA(state,formData){
      state.email = formData.email
      state.password = formData.password
      console.log(state.email, state.password)
    } 
  }
}