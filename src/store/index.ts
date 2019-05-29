import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence  from "vuex-persist"

//引入 module
import app from './module/app'

Vue.use(Vuex)

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    app,
  },
  // plugins: [vuexLocal.plugin]
})
