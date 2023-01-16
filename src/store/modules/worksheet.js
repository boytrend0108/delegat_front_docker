export default {
  state:{
    country:'',
    sity:"",
  },
  getters: {
    COUNTRY(state){
      return state.country
    },
    CITY(state){
      return state.city
    }
  },
  actions: {},
  mutations: {
    SET_INPUT(state, data){
      state.country = data
    }
  }
}