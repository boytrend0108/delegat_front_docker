import { createStore } from 'vuex'
import auth from './modules/auth'
import form from './modules/form'
import worksheet from "./modules/worksheet"

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth, form, worksheet,
  }
})
