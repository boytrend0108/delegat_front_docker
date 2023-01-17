import router from "@/router"
export default {
  state:{
    input:'',
    country:'',
    city:"",
    application_name: '',
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
    GO_TO_NEXT_STEP({state,commit},route){ 
      console.log(route.query.step)
      if (route.path === '/') {
        console.log(router)
        commit('SET_INPUT', route)
        router.push('/application?step=cities')
      } 
      else if (route.query.step === 'cities') {
        commit('SET_INPUT', route)
        state.input = ''
        router.push('/application?step=naming')
      }
      else if (route.query.step === 'naming') {
        commit('SET_INPUT', route)
        state.input = ''
        router.push('/application?step=product')
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
    SET_INPUT(state, route){
      if(route.path === '/'){
        state.country = state.input
      } else if(route.query.step === 'cities'){
        state.city = state.input
      }  else if(route.query.step === 'naming'){
        state.application_name = state.input
      }
    }

  }
}