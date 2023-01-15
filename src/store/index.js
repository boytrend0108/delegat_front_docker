import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import form from '@/store/modules/form'
import worksheet from "@/store/modules/worksheet"

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
