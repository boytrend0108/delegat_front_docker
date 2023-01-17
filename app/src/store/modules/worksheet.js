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

    GO_TO_PREV_STEP({commit},route){ 
      if (route.query.step === 'cities') {
        router.push('/')
        commit('PLAG')
      } 
      else if (route.query.step === 'naming') {
        router.push('/application?step=cities')
      }
      else if (route.query.step === 'product') {    
        router.push('/application?step=naming')
      }
     
    },


  },
  mutations: {
    SAVE_INPUT_VALUE(state,value){
      state.input = value;
    },
    SET_INPUT(state, route){
      if(route.path === '/'){
        state.country = state.input
      } else if(route.query.step === 'cities'){
        state.city = state.input
      }  else if(route.query.step === 'naming'){
        state.application_name = state.input
      }
    },

    PLAG(){

    }

  }
}