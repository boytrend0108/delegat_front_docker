export default {
  state:{
    input:'',
    country:'',
    city:"",
  },
  getters: {
    INPUT(state){
      return state.input
    },
    COUNTRY(state){
      return state.country
    },
    CITY(state){
      return state.city
    }
  },
  actions: {},
  mutations: {
    SAVE_INPUT_VALUE(state,value){
      state.input = value;
    },
    
    SET_INPUT(state, data){
      if(data.inputPath === '/'){
        state.country = data.inputValue
      } else if(data.inputPath === '/cities'){
        state.cities = data.inputValue
      }
    }
  }
}