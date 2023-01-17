import router from "@/router"
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
  actions: {
    GO_TO_NEXT_STEP({commit},route){ 
      console.log(route.query.step)
      if (route.path === '/') {
        console.log(router)
        router.push('/application?step=cities')
      } 
      else if (route.query.step === 'cities') {
        router.push('/application?step=naming')
      }
    },
  },
  mutations: {
    SAVE_INPUT_VALUE(state,value){
      state.input = value;
    },
    
    // SET_INPUT(state, data){
    //   console.log(data)
    //   if(data.inputPath === '/'){
    //     state.country = data.inputValue
    //   } else if(data.inputPath === 'cities'){
    //     state.city = data.inputValue
    //   }
    // }

    SET_INPUT(state, data){
      console.log(data)
      if(data.inputPath === '/'){
        state.country = data.inputValue
      } else if(data.inputPath === 'cities'){
        state.city = data.inputValue
      }
    }
  }
}