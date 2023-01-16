export default {
  state:{
    country:'',
    city:"",
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
      if(data.inputPath === '/'){
        state.country = data.inputValue
      } else if(data.inputPath === '/cities'){
        state.cities = data.inputValue
      }
    }
  }
}