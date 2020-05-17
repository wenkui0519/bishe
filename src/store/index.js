import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    top: 376
  },
  mutations: {
    changeTop (state, top) {
      state.top = top
    }
  },
  actions: {
  },
  modules: {
  }
})
